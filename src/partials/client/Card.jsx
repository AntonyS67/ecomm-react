import React from "react";
import { useCart } from "../../hooks/useCart";
import { BASE_URI } from "../../utils/constants";

export default function Card(props) {
  const { product } = props;

  const { addCart, getCartByProduct } = useCart();

  const addProductToCart = async () => {
    const result = await getCartByProduct(product.id);
    if (result.cart.length > 0) {
      alert(`El ${product.name} ya se agregó al carrito`);
    } else {
      addCart({
        product_id: product.id,
        quantity: 1,
      });
      alert("Se agrego el producto al carrito satisfactoriamente");
    }
  };
  return (
    <div className="lg:w-1/3 md:w-1/2 md:px-4 md:gap-5 xl:px-6 mt-8 md:mt-0 text-center bg-white p-10">
      <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
      <h5 className="text-xl font-medium uppercase mb-4">{product.name}</h5>
      <img src={`${BASE_URI}/storage/${product.image}`} alt="" />
      <p className="text-gray-600 mt-3">{product.description}</p>
      <button
        onClick={addProductToCart}
        className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600 mt-3"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
