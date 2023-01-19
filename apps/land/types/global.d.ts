export type T_Locations = {
  [k: string]: string[];
};

export type T_SearchQuery = {
  propertyType: string;
  location: string;
  unitSize: string;
  priceRangeFrom: string;
  priceRangeTo: string;
};
