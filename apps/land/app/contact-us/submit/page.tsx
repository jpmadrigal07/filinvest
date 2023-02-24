import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/contact-us/constants";

async function getToken() {
  const headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");
  const urlencoded = new URLSearchParams();
  urlencoded.append(
    "refresh_token",
    "1000.c58cea62202fbeb02672ff1f3c229538.972b9b3484861b135dd97e8e0706a5bc"
  );
  urlencoded.append("client_id", "1000.EN76KMQ00988HHFNDEMGT0O45M8PHE");
  urlencoded.append(
    "client_secret",
    "951233bea8b1b717479956d235434235c1f7e44718"
  );
  urlencoded.append("grant_type", "refresh_token");
  const res = await fetch("https://accounts.zoho.com/oauth/v2/token", {
    method: "POST",
    body: urlencoded,
    headers: headers,
  });
  if (!res.ok) {
    throw new Error("Failed to post data");
  }
  const jsonData = await res.json();
  return jsonData;
}

async function submitContact(token: any, contactData: any) {
  if (token && contactData) {
    const data = {
      data: [
        {
          First_Name: contactData.firstName,
          Last_Name: contactData.lastName,
          Email: contactData.email,
          Phone: contactData.contact,
          Notes: contactData.notes,
        },
      ],
      trigger: ["approval", "workflow", "blueprint"],
    };
    const res = await fetch("https://www.zohoapis.com/crm/v2/Leads", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Zoho-oauthtoken ${token.access_token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to post data");
    }
    const jsonData = await res.json();
    return jsonData;
  } else {
    return null;
  }
}

const ContactUsSubmitPage = async ({ searchParams }: any) => {
  const { title, breadcrumbs, image } = HEADER_INFO.contactUs;
  const token = await getToken();
  const submit = await submitContact(
    token,
    searchParams && searchParams.data ? JSON.parse(searchParams.data) : null
  );
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <div className="my-24 mx-9 md:flex-row xl:mx-16 2xl:mx-44">
        {token &&
        token.access_token &&
        submit &&
        submit.data[0].code === "SUCCESS" ? (
          <h2 className="text-xl">
            Successfully received you information. We will get back to you as
            soon as possible.
          </h2>
        ) : (
          <h2 className="text-xl">
            There was an error submitting your data. Please contact Filinvest
            support team.
          </h2>
        )}
      </div>
    </>
  );
};

export default ContactUsSubmitPage;
