interface promsRating {
  rate: number;
  count: number;
}
export interface productResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: promsRating;
}

export interface productResponseStore {
  id: number;
  title: string;
  price: number;
  img: string;
  count: number;
}

export interface productLike {
  id: number;
  title: string;
  img: string;
}

export interface productSingleCount {
  id: number;
  count: number;
  price: number;
}

export interface contactTabProms {
  email: string;
  lastname: string;
  phone: string;
  username: string;
}

export interface shippingProms {
  city: string;
  streetAdress: string;
  country: string;
  postcode: string;
}

export interface cardCreditproms {
  CVC: string;
  cardNumber: string;
  cardholder: string;
  validDate: string;
}
interface promsNamenativeitem {
  official: string;
  common: string;
}
interface promsNativename {
  [key: string]: promsNamenativeitem;
}
interface promsName {
  common: string;
  official: string;
  nativeName: promsNativename;
}
export interface countryType {
  name: promsName;
}
