import "../styles/globals.css";
import MainFooter from "@/components/footer/MainFooter";
import MainNavigation from "@/components/navigation/MainNavigation";
import Content from "@/components/pages/404/Content";

export default function NotFound() {
  return (
    <>
      <MainNavigation className="bg-royal-dark-blue bg-opacity-40" />
      <Content />
      <MainFooter />
    </>
  );
}
