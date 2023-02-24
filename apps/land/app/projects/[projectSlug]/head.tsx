import { FAVICON_NAME } from "@/helpers/constants";
import qs from "qs";

type PageProps = {
  params: {
    projectSlug: string;
  };
};

async function getProjectContent(slug: string) {
  const query = {
    slug: {
      equals: slug,
    },
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query, // ensure that `qs` adds the `where` property, too!
    },
    { addQueryPrefix: true }
  );
  const res = await fetch(
    `${process.env.CMS_URL}/api/projects${stringifiedQuery}`,
    { cache: "force-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData = await res.json();
  return jsonData.docs ? jsonData.docs[0] : null;
}

export default async function Head({ params: { projectSlug } }: PageProps) {
  const content = await getProjectContent(projectSlug);
  if (!content) {
    return (
      <>
        <title>Page not found</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Filinvest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href={`/${FAVICON_NAME}`} />
      </>
    );
  }
  return (
    <>
      <title>{content.meta ? content.meta.title : content.title}</title>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content={content.meta ? content.meta.description : ""}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href={`/${FAVICON_NAME}`} />
      {/* Facebook */}
      <meta
        property="og:title"
        content={content.meta ? content.meta.title : content.title}
      />
      <meta
        property="og:url"
        content={`${process.env.LAND_URL}/project/${content.slug}`}
      />
      <meta
        property="og:image"
        content={
          content.meta && content.meta.image
            ? `${process.env.LAND_URL}${content.meta.image.url}`
            : ""
        }
      />
      {/* Twitter */}
      <meta
        name="twitter:title"
        content={content.meta ? content.meta.title : content.title}
      />
      <meta
        name="twitter:description"
        content={content.meta ? content.meta.description : ""}
      />
      <meta
        name="twitter:image"
        content={
          content.meta && content.meta.image
            ? `${process.env.LAND_URL}${content.meta.image.url}`
            : ""
        }
      />
    </>
  );
}
