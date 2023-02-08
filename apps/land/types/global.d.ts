export type T_Locations = {
  [k: string]: string[];
};

export type T_SearchQuery = {
  propertyType: string;
  location: string;
  unitSize: string;
  unitSizeFrom: string | number;
  unitSizeTo: string | number;
  priceRangeFrom: string | number;
  priceRangeTo: string | number;
  priceRange?: number[];
  brand?: string;
};

export type T_Brands = "Land" | "Prestige" | "Futura" | "Aspire";
