import React, { useState } from "react";
import {
  deleteProductApi,
  getAllProductsApi,
  getProductsApi,
  saveProductsApi,
  updateProductApi,
} from "../api/products";
import { TOKEN } from "../utils/constants";
import { useAuth } from "./useAuth";

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);

  const {auth} = useAuth()

  const getProducts = async (page) => {
    try {
      setLoading(true);
      const products = await getProductsApi(page);
      setLoading(false);
      setTotal(products.products.total);
      setPages(products.products.last_page);
      setProducts(products.products.data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const result = await getAllProductsApi();
      setLoading(false);
      setProducts(result.products);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const saveProduct = async (data) => {
    try {
      setLoading(true);
      await saveProductsApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updateProduct = async (data, id) => {
    try {
      setLoading(true);
      await updateProductApi(data, id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      setLoading(true);
      await deleteProductApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    loading,
    error,
    products,
    pages,
    total,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
  };
}
