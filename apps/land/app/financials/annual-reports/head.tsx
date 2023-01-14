import { FAVICON_NAME, WEB_TITLE } from "@/helpers/constants";
import BUYERS_ROUTES from "@/helpers/routes/financials";

export default async function Head() {
  const title = `${BUYERS_ROUTES.ANNUAL_REPORTS} | ${WEB_TITLE}`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="Filinvest" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href={`/${FAVICON_NAME}`} />
    </>
  );
}
