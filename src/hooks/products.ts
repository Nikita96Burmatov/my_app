import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../model";

export function useProducts() {

    const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState("");

  async function fetchProducts() {
    try {
      SetError('')
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      SetLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      SetLoading(false);
      SetError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, loading}
}