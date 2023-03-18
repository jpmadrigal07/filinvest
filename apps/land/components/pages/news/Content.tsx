"use client";
// import SelectCategory from "@/components/select/SelectCategory";
import Grid from "@/components/svg/Grid";
import List from "@/components/svg/List";
import React, { useState } from "react";
import NewsTileList from "./NewsTileList";
import SelectCategory from "@/components/select/SelectCategory";
import useGetProjectsByCategory from "@/components/list/hooks/useGetProjectsByCategory";
const Content = ({ news, categories }: any) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("");
  const [position, setPosition] = useState<"list" | "grid">("grid");
  const { data, isFetching } = useGetProjectsByCategory({
    projectType: selectedPropertyType,
  });
  const categoriesString =
    categories.length > 0
      ? categories.map((category: any) => {
          return category.title;
        })
      : [];
  return (
    <section className="my-12 mx-9 gap-9 xl:my-24 xl:mx-16 2xl:mx-44">
      <div className="flex items-center justify-end gap-7">
        <List
          color={position === "list" ? "#0550E3" : "#303030"}
          className="hidden hover:cursor-pointer focus:cursor-pointer md:block"
          onClick={() => setPosition("list")}
        />
        <Grid
          color={position === "grid" ? "#0550E3" : "#303030"}
          className="hidden hover:cursor-pointer focus:cursor-pointer md:block"
          onClick={() => setPosition("grid")}
        />
        <SelectCategory
          values={categoriesString}
          defaultValue={selectedPropertyType}
          onValueChange={setSelectedPropertyType}
        />
      </div>
      {!isFetching ? (
        <>
          <h3 className="text-jet text-2xl">
            {`${
              selectedPropertyType == "" ? "" : `${data && data?.length} found`
            }`}
            <NewsTileList
              news={data ? data : news}
              position={position}
              expandHeight={true}
            />
          </h3>
        </>
      ) : (
        <h3 className="text-jet min-h-[600px] text-2xl">Loading...</h3>
      )}
    </section>
  );
};

export default Content;
