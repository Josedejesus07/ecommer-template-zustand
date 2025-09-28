import { countryType } from "../interfaces/product-interfaces";

const url = "https://fakestoreapi.com";
const urlCountry = "https://restcountries.com/v3.1";
export const productAll = async () => {
  try {
    const data = await fetch(`${url}/products`);
    const response = await data.json();
    return response;
  } catch (error) {
    throw console.error(error);
  }
};

export const getProductdescriptionId = async (id: number) => {
  try {
    const data = await fetch(`${url}/products/${id}`);
    const response = await data.json();
    if (response.length === 0) {
      return [];
    }
    return response;
  } catch (error) {
    throw console.error(error);
  }
};

export const getAllcountry = async () => {
  try {
    const data = await fetch(`${urlCountry}/all?fields=name`);
    const response = await data.json();
    return response as countryType[]
  } catch (error) {
    throw console.error(error);
  }
};
