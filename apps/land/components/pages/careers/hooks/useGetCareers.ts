import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import qs from "qs";

export async function getCareers(category: string) {
  const query = {
    "careersCategory.title": {
      equals: category,
    },
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query, // ensure that `qs` adds the `where` property, too!
    },
    { addQueryPrefix: true }
  );
  const res = await fetch(
    `/api/careers${category !== "All" ? stringifiedQuery : ""}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const jsonData = await res.json();
  return jsonData ? (jsonData.docs ? jsonData.docs : []) : null;
}

function useGetCareers() {
  const [category, setCategory] = useState("All");
  const query = useQuery(["careers", category], () => getCareers(category), {
    refetchOnWindowFocus: false,
  });
  return {
    ...query,
    category,
    setCategory,
  };
}

export default useGetCareers;
