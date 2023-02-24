import RegularContent from "@/components/pages/projects/regular/Content";
import OfficeContent from "@/components/pages/projects/office/Content";
import { notFound } from "next/navigation";
import qs from "qs";
import { Project } from "shared-types";

type PageProps = {
  params: {
    projectSlug: string;
  };
};

const stringifiedQuery = (query: Object) => {
  return qs.stringify(
    {
      where: query, // ensure that `qs` adds the `where` property, too!
    },
    { addQueryPrefix: true }
  );
};

async function geProject(slug: string) {
  const query = {
    slug: {
      equals: slug,
    },
  };
  const res = await fetch(
    `${process.env.CMS_URL}/api/projects${stringifiedQuery(query)}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData = await res.json();
  return jsonData.docs ? (jsonData.docs[0] as Project) : null;
}

const ProjectsPage = async ({ params: { projectSlug } }: PageProps) => {
  const content = await geProject(projectSlug);
  if (!content) {
    notFound();
  }
  return (
    <div>
      {content.dataType === "regular" ? (
        <RegularContent project={content} />
      ) : (
        <OfficeContent project={content} />
      )}
    </div>
  );
};

export default ProjectsPage;
