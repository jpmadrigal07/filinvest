import { FAVICON_NAME, WEB_TITLE } from "@/helpers/constants";

export default async function Head() {
  return (
    <>
      <title>{WEB_TITLE}</title>
      <meta name="description" content="Filinvest" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href={`/${FAVICON_NAME}`} />
    </>
  );
}
