import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/careers/constants";

export async function generateMetadata() {
  return {
    title: "Careers",
    description: "Careers",
  };
}

async function submitCareers(careerData: any) {
  if (careerData) {
    const data = {
      full_name: `${careerData.firstName} ${careerData.lastName}`,
      email: careerData.email,
      phone_number: careerData.contact,
      description: `I would like to apply for the position "${careerData.career}"`,
    };
    const res = await fetch("https://api.manatal.com/open/v3/candidates/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Token ${process.env.MANATAL_TOKEN}`,
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
const CareersSubmitPage = async ({ searchParams }: any) => {
  const { title, breadcrumbs, image } = HEADER_INFO.careers;
  const submit = await submitCareers(
    searchParams && searchParams.data ? JSON.parse(searchParams.data) : null
  );
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <div className="my-24 mx-9 md:flex-row xl:mx-16 2xl:mx-44">
        {submit && submit?.id ? (
          <h2 className="text-xl">Successfully applied to Filinvest</h2>
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

export default CareersSubmitPage;
