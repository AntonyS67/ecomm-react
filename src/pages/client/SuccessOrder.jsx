import React from "react";
import { Link } from "react-router-dom";
import Container from "../../partials/client/Container";
import Navbar from "../../partials/client/Navbar";

export default function SuccessOrder() {
  return (
    <div className="header-2">
      <Navbar />
      <Container>
        <div className="text-center">
          <h2 className="text-center mb-3">
            Se ha completado su orden correctamente
          </h2>
          <Link to="/" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Volver a pedir</Link>
        </div>
      </Container>
    </div>
  );
}
