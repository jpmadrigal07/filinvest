import { Navigation, NavigationMenu, NavigationSubMenu } from "shared-types";
import AboutUs from "../../menu/AboutUs";
import OurBusinesses from "../../menu/OurBusinesses";
import Residences from "../../menu/Residences";
import InvestorRelations from "../../menu/InvestorRelations";

const formatNavigations = (navigations: Navigation) => {
  return navigations.mainMenu.map((menu: NavigationMenu) => {
    const subMenus =
      menu.subMenu && menu.subMenu.length > 0
        ? menu.subMenu.map((sub: NavigationSubMenu) => {
            return {
              title: sub.link.label,
              subTitle: sub.link.description,
              link: sub.link.url,
              featured: sub.featured,
            };
          })
        : undefined;
    let wideMenuComponent;
    if (menu.link.label === "About Us") {
      wideMenuComponent = (
        <AboutUs
          aboutUsMenu={subMenus}
          firstAwards={menu.firstFeaturedSlug}
          secondAwards={menu.secondFeaturedSlug}
        />
      );
    } else if (menu.link.label === "Our Businesses") {
      wideMenuComponent = <OurBusinesses ourBusinessesMenu={subMenus} />;
    } else if (menu.link.label === "Residences") {
      wideMenuComponent = <Residences property={menu.firstFeaturedSlug} />;
    } else if (menu.link.label === "Investor Relations") {
      wideMenuComponent = (
        <InvestorRelations
          investorRelationsMenu={subMenus}
          news={menu.firstFeaturedSlug}
        />
      );
    }
    const isLink = !subMenus || subMenus.length === 0 ? true : undefined;
    const link = menu.link && menu.link.url !== "#" ? menu.link.url : undefined;
    const singleMenu = {
      text: menu.link.label,
      ...(isLink && { isLink }),
      ...(wideMenuComponent && { fullComponent: wideMenuComponent }),
      ...(subMenus && { subMenus }),
      ...(link && { link }),
    };
    return singleMenu;
    // TODO: fix type for this
  }) as any;
};

export default formatNavigations;
