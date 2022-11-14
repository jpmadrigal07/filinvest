import AboutUs from "../menu/AboutUs";
import OurBusinesses from "../menu/OurBusinesses";
import Residences from "../menu/Residences";
import InvestorRelations from "../menu/InvestorRelations";
import ROUTES from "../../../helpers/routes";

export const menus = [
    {
      text: ROUTES.ABOUT_US.name,
      fullComponent: <AboutUs/>,
    },
    {
      text: ROUTES.OUR_BUSINESSES.name,
      fullComponent: <OurBusinesses/>,
    },
    {
      text: ROUTES.RESIDENCES.name,
      fullComponent: <Residences/>,
    },
    {
      text: ROUTES.SELLERS.name,
      subMenus: [
        {
          title: "Seller's Hub",
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: ROUTES.SELLERS.SELLER_HUB.url
        },
        {
          title: "Seller Accreditation Tool",
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: ROUTES.SELLERS.SELLER_ACCREDITATION_TOOL.url
        },
      ],
    },
    {
      text: ROUTES.BUYERS.name,
      subMenus: [
        {
          title: ROUTES.BUYERS.CALCULATOR.name,
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: ROUTES.BUYERS.CALCULATOR.url
        },
        {
          title: ROUTES.BUYERS.ONLINE_APPOINTMENT.name,
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: ROUTES.BUYERS.ONLINE_APPOINTMENT.url
        },
        {
          title: ROUTES.BUYERS.FILPAY.name,
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: ROUTES.BUYERS.FILPAY.url
        },
        {
          title: ROUTES.BUYERS.MYHOME.name,
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: ROUTES.BUYERS.MYHOME.url
        },
      ],
    },
    {
      text: ROUTES.NEWS.name,
      isLink: true,
      link: ROUTES.NEWS.url,
    },
    {
      text: ROUTES.PUSONG_FILINVEST.name,
      isLink: true,
      link: ROUTES.PUSONG_FILINVEST.url,
    },
    {
      text: ROUTES.INVESTOR_RELATIONS.name,
      fullComponent: <InvestorRelations/>,
    },
];