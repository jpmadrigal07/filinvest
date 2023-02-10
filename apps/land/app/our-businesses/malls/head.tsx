import { FAVICON_NAME, WEB_TITLE } from "@/helpers/constants";
import OUR_BUSINESSES_ROUTES from "@/helpers/routes/ourBusinesses";

export default async function Head() {
  const title = `${OUR_BUSINESSES_ROUTES.MALLS.name} | ${WEB_TITLE}`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="Filinvest" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href={`/${FAVICON_NAME}`} />
    </>
  );
}
