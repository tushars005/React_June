
import axios from "axios"
export const getProducts = (payload) => {
    return {
      type: "GET_PRODUCTS",
      payload,
    };
  };

  export const addcart = (payload)=>{
      return {
          type: "ADD_TO_CART",
          payload,
      };
  };

  export const clearcart= ()=>{
      return{
          type: "CLEAR_CART",
          
      }
  }