import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/projects/ContentOld";
import qs from "qs";

const query = {
  "site.title": {
    equals: "Land",
  },
};

const stringifiedQuery = qs.stringify(
  {
    where: query, // ensure that `qs` adds the `where` property, too!
  },
  { addQueryPrefix: true }
);

async function geProjects() {
  const res = await fetch(
    `${process.env.CMS_API_URL}/api/projects${stringifiedQuery}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ProjectsPage = async () => {
  // const news = await geProjects();
  return (
    <>
      <MainHeader
        title="Filinvest Land Projects"
        isBlueHeader
        bgUrl="blue-header-bg.png"
      />
      {/* <Content news={news} /> */}
    </>
  );
};

export default ProjectsPage;
