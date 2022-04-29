import { useState } from "react";
import {
  addToCartApi,
  getCartApi,
  getCartByProductApi,
  removeToCartApi,
} from "../api/cart";
import { useAuth } from "./useAuth";

export const useCart = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carts, setCarts] = useState([]);

  const {auth} = useAuth()

  const getCart = async () => {
    try {
      setLoading(true);
      const result = await getCartApi(auth.token);
      setCarts(result.carts);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  const getCartByProduct = async (productId) => {
    try {
      setLoading(true);
      const result = await getCartByProductApi(auth.token, productId);
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const addCart = async (data) => {
    try {
      setLoading(true);
      await addToCartApi(data, auth.token);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const deleteCart = async (id) => {
    try {
      setLoading(true);
      await removeToCartApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    loading,
    error,
    carts,
    addCart,
    getCart,
    getCartByProduct,
    deleteCart,
  };
};
