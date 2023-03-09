import RegularContent from "@/components/pages/projects/regular/Content";
import OfficeContent from "@/components/pages/projects/office/Content";
import { notFound } from "next/navigation";
import qs from "qs";
import { Project } from "shared-types";
import { metaBuilder } from "@/helpers/metaBuilder";
import { CACHE_REVALIDATE } from "@/helpers/constants";

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
    `${process.env.CMS_URL}/api/projects${stringifiedQuery(query)}`,
    {
      next: { revalidate: CACHE_REVALIDATE },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData = await res.json();
  return jsonData.docs ? (jsonData.docs[0] as Project) : null;
}

export async function generateMetadata({ params: { projectSlug } }: PageProps) {
  const content = await geProject(projectSlug);
  return metaBuilder(content);
}

const ProjectsPage = async ({ params: { projectSlug } }: PageProps) => {
  const content = await geProject(projectSlug);
  if (!content) {
    notFound();
  }
  console.log(content);
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
