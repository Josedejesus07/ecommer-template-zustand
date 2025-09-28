import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  cardCreditproms,
  contactTabProms,
  productLike,
  productResponseStore,
  shippingProms,
} from "../interfaces/product-interfaces";

interface products {
  contactTab: contactTabProms;
  shippingTab: shippingProms;
  creditCard: cardCreditproms;
  product: productResponseStore[]; // el estado incial o la variable inicial
  productLike: productLike[];
  productId: number;
  userTextsearh: string;
  modalPaymentstate: boolean;
  keyTab: string;
  categorie: string;
  changeCategorie: (c: string) => void;
  insertContacts: (user: contactTabProms) => void;
  insertShipping: (info: shippingProms) => void;
  insertCreditcard: (info: cardCreditproms) => void;
  changeKeytab: (n: string) => void;
  onOpen: () => void;
  onClosed: () => void;
  addProduct: (e: productResponseStore) => void; // esta son las funciones que modifican
  // o pueden modificar esa variable de product
  addLikeproduct: (e: productLike) => void;
  removeProduct: (id: number) => void;
  removeLikeproduct: (id: number) => void;
  removeLikeproductAll: () => void;
  removeProductall: () => void;
  addProductid: (id: number) => void;
  searchProduct: (n: string) => void;
  //Actualizar tabla precio del producto individualmente
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalProductprice: number;
  //p: productResponseStore[]
  getTotalPrice: () => void;
  removeAll: () => void;
}

export const useProduct = create<products>()(
  persist(
    (set, get) => ({
      product: [],
      productLike: [],
      productId: 0,
      userTextsearh: "",
      totalProductprice: 0,
      keyTab: "contacts",
      categorie: "All",
      changeCategorie: (categorie) =>
        set((state) => ({
          categorie: categorie,
        })),
      removeAll: () =>
        set((state) => ({
          product: [],
          productLike: [],
          productId: 0,
          userTextsearh: "",
          totalProductprice: 0,
          keyTab: "contacts",
          shippingTab: {
            city: "",
            country: "",
            postcode: "",
            streetAdress: "",
          },
          contactTab: {
            username: "",
            email: "",
            lastname: "",
            phone: "",
          },
          creditCard: {
            cardholder: "",
            cardNumber: "",
            CVC: "",
            validDate: "",
          },
          modalPaymentstate: false,
        })),
      shippingTab: {
        city: "",
        country: "",
        postcode: "",
        streetAdress: "",
      },
      contactTab: {
        username: "",
        email: "",
        lastname: "",
        phone: "",
      },
      creditCard: {
        cardholder: "",
        cardNumber: "",
        CVC: "",
        validDate: "",
      },
      insertCreditcard: (info) =>
        set((state) => ({
          creditCard: info,
        })),
      insertContacts: (newUser) =>
        set((state) => ({
          contactTab: newUser,
        })),
      insertShipping: (info) =>
        set((state) => ({
          shippingTab: info,
        })),
      changeKeytab: (n) =>
        set((state) => ({
          keyTab: n,
        })),
      modalPaymentstate: false,
      onOpen: () =>
        set((state) => ({
          modalPaymentstate: true,
        })),
      onClosed: () =>
        set((state) => ({
          modalPaymentstate: false,
        })),
      getTotalPrice: () =>
        set((state) => ({
          totalProductprice: state.product.reduce((acomolado, result) => {
            return acomolado + result.count * result.price;
          }, 0),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          product: state.product.map((result) =>
            result.id === id ? { ...result, count: result.count + 1 } : result
          ),
        })),
      decreaseQuantity: (id) =>
        set((state) => ({
          product: state.product.map((result) =>
            result.id === id
              ? { ...result, count: result.count === 1 ? 1 : result.count - 1 }
              : result
          ),
        })),
      addProduct: (nuevoProducto) =>
        set((state) => ({
          product: [...state.product, nuevoProducto],
        })),
      removeProduct: (id) =>
        set((state) => ({
          product: state.product.filter((result) => result.id != id),
        })),
      removeProductall: () =>
        set((state) => ({
          product: [],
          totalProductprice: 0,
        })),
      addLikeproduct: (nuevoLikeproducto) =>
        set((state) => ({
          productLike: [...state.productLike, nuevoLikeproducto],
        })),
      removeLikeproduct: (id) =>
        set((state) => ({
          productLike: state.productLike.filter((result) => result.id != id),
        })),
      removeLikeproductAll: () =>
        set((state) => ({
          productLike: [],
        })),
      addProductid: (id) =>
        set((state) => ({
          productId: id,
        })),
      searchProduct: (nameNew) =>
        set((state) => ({
          userTextsearh: nameNew,
        })),
    }),
    {
      name: "content-all",
    }
  )
);


