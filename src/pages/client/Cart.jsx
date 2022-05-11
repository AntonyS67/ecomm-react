import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableCart from "../../components/cart/TableCart";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import Container from "../../partials/client/Container";
import Navbar from "../../partials/client/Navbar";

export default function Cart() {
  const [isChange, setIsChange] = useState(false);

  const { loading, carts, getCart, deleteCart } = useCart();
  const { auth } = useAuth();

  useEffect(() => {
    if (auth) getCart();
  }, [isChange]);

  const handleChange = () => setIsChange((prev) => !prev);

  return (
    <div className="header-2">
      <Navbar />
      <Container>
        {!auth.me ? (
          <p className="text-center">Inicia sesión porfavor</p>
        ) : loading ? (
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
