/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  content?: {
    [k: string]: unknown;
  }[];
  site: Site;
  _status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sites".
 */
export interface Site {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: string;
  title: string;
  shortDescription: string;
  coverImage: File;
  content?: {
    [k: string]: unknown;
  }[];
  author: User;
  slug?: string;
  projectTypeTag?: ProjectCategory;
  propertyTypeTag?: PropertyCategory;
  locationTag?: LocationCategory;
  locationGroupTag?: LocationGroupCategory;
  subLocationTag?: SubLocationCategory;
  site: Site;
  _status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "files".
 */
export interface File {
  id: string;
  alt: string;
  site: Site;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  roles?: ("admin" | "editor" | "subEditor")[];
  sites?: string[] | Site[];
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news-categories".
 */
export interface NewsCategory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  dataType?: "regular" | "office";
  title: string;
  slug?: string;
  headerImage: File;
  logo: File;
  price: number;
  numberOfStaffRoom: number;
  numberOfBathrooms: number;
  numberOfBedrooms?: number;
  address1: string;
  address2: string;
  floor: string;
  wall: string;
  ceiling: string;
  heightClearance: string;
  VRF: string;
  elevator: string;
  telephone: string;
  powerInput: string;
  powerOutput: string;
  people: string;
  description: string;
  projectType: ProjectCategory;
  propertyType?: PropertyCategory;
  location: LocationCategory;
  locationGroup: LocationGroupCategory;
  subLocation?: SubLocationCategory;
  size: number;
  coverImage: File;
  imageGallery: {
    image?: File;
    id?: string;
  }[];
  shortDescription: string;
  overview: {
    [k: string]: unknown;
  }[];
  locationTab: {
    [k: string]: unknown;
  }[];
  mapImage: File;
  managerName: string;
  managerPhoto: File;
  managerPhone: string;
  managerEmail: string;
  managerFacebookLink: string;
  managerLinkedinLink: string;
  relatedOffice1: Project;
  relatedOffice2: Project;
  relatedOffice3: Project;
  site: Site;
  _status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "project-categories".
 */
export interface ProjectCategory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "location-categories".
 */
export interface LocationCategory {
  id: string;
  title: string;
  locationGroup: LocationGroupCategory;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "location-group-categories".
 */
export interface LocationGroupCategory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sub-location-categories".
 */
export interface SubLocationCategory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "careers".
 */
export interface Career {
  id: string;
  title: string;
  location: string;
  responsibilities: {
    [k: string]: unknown;
  }[];
  requirements: {
    [k: string]: unknown;
  }[];
  careersCategory: CareerCategory;
  site: Site;
  _status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "career-categories".
 */
export interface CareerCategory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "advertisements".
 */
export interface Advertisement {
  id: string;
  title: string;
  content?: {
    [k: string]: unknown;
  }[];
  site: Site;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "property-categories".
 */
export interface PropertyCategory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "menu".
 */
export interface Menu {
  id: string;
  owner?: User;
  createdAt: string;
  updatedAt: string;
}

export interface Award {
  id: string;
  title: string;
  description: string;
  coverImage: File;
  site: Site;
  _status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation".
 */
export interface NavigationSubMenu {
  link: {
    type?: "reference" | "custom";
    newTab?: boolean;
    reference: {
      value: Page;
      relationTo: "pages";
    };
    url: string;
    label: string;
    description?: string;
  };
  featured?:
    | {
        value: News;
        relationTo: "news";
      }
    | {
        value: Project;
        relationTo: "projects";
      }
    | {
        value: Award;
        relationTo: "awards";
      };
  id?: string;
}
export interface NavigationMenu {
  link: {
    type?: "reference" | "custom";
    newTab?: boolean;
    reference: {
      value: Page;
      relationTo: "pages";
    };
    url: string;
    label: string;
    description?: string;
  };
  firstFeaturedSlug?:
    | {
        value: News;
        relationTo: "news";
      }
    | {
        value: Project;
        relationTo: "projects";
      };
  secondFeaturedSlug?:
    | {
        value: News;
        relationTo: "news";
      }
    | {
        value: Project;
        relationTo: "projects";
      };
  subMenu: NavigationSubMenu[];
  id?: string;
}
export interface Navigation {
  id: string;
  mainMenu: NavigationMenu[];
}

export interface LocationSettings {
  locationGroup: {
    reference: {
      value: LocationGroupCategory;
      relationTo: "location-group-categories";
    };
  };
  location: {
    location: {
      reference: {
        value: LocationCategory;
        relationTo: "location-categories";
      };
    };
    id?: string;
  }[];
  id?: string;
}
export interface PropertyTypeSettings {
  propertyType: {
    reference: {
      value: PropertyCategory;
      relationTo: "property-categories";
    };
  };
  id?: string;
}
export interface UnitSizesSettings {
  sizeFrom: number;
  sizeTo: number;
  id?: string;
}
export interface PricePointsSettings {
  point: number;
  id?: string;
}
export interface BedroomRangeSettings {
  bedroomFrom: number;
  bedroomTo: number;
  id?: string;
}
export interface SubLocationSettings {
  subLocation: {
    reference: {
      value: SubLocationCategory;
      relationTo: "sub-location-categories";
    };
  };
  id?: string;
}
export interface PropertySearch {
  id: string;
  pricePoints: PricePointsSettings[];
  unitSizes: UnitSizesSettings[];
  locations: LocationSettings[];
  propertyTypes: PropertyTypeSettings[];
}
