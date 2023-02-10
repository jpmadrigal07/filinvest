export type T_Locations = {
  [k: string]: string[];
};

export type T_SearchQuery = {
  propertyType: string;
  location: string;
  unitSize: string;
  bedrooms: string;
  unitSizeFrom: string | number;
  unitSizeTo: string | number;
  priceRangeFrom: string | number;
  priceRangeTo: string | number;
  priceRange?: number[];
  brand?: string;
  bedroomsFrom: string | number;
  bedroomsTo: string | number;
  propertyName: string;
  subLocation: string;
};

export type T_Brands = "Land" | "Prestige" | "Futura" | "Aspire";
