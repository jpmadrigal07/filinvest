import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/contact-us/constants";
import Content from "@/components/pages/contact-us/Content";

export async function generateMetadata() {
  return {
    title: "Contact Us",
    description: "Contact Us",
  };
}

const ContactUsPage = async () => {
  const { title, breadcrumbs, image, imageSmall } = HEADER_INFO.contactUs;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
      />
      <Content />
    </>
  );
};

export default ContactUsPage;
