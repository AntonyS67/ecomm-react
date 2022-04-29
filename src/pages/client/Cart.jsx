import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableCart from "../../components/cart/TableCart";
import { useCart } from "../../hooks/useCart";
import Container from "../../partials/client/Container";
import Navbar from "../../partials/client/Navbar";

export default function Cart() {
  const { loading, carts, getCart, deleteCart } = useCart();
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    getCart();
  }, [isChange]);

  const handleChange = () => setIsChange((prev) => !prev);
  return (
    <div className="header-2">
      <Navbar />
      <Container>
        {loading ? (
          <p>Cargando...</p>
        ) : carts.length === 0 ? (
          <p className="text-center">El carrito esta vacio</p>
        ) : (
          <div className="block">
            <TableCart
              carts={carts}
              deleteCart={deleteCart}
              handleChange={handleChange}
            />
            <Link
              to="/pay"
              className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600 mt-3"
            >
              Proceder a pagar
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}
