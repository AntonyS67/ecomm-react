import React, { useEffect } from "react";
import useProduct from "../../hooks/useProduct";
import Card from "../../partials/client/Card";
import Container from "../../partials/client/Container";
import Navbar from "../../partials/client/Navbar";

export default function Home() {
  const { loading, products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
    let toggleBtn = document.querySelector("#navbar-toggle");
    let collapse = document.querySelector("#navbar-collapse");

    toggleBtn.onclick = () => {
      collapse.classList.toggle("hidden");
      collapse.classList.toggle("flex");
    };
  }, []);

  return (
    <>
      <div className="header-2">
        <Navbar />
        <Container flex>
            {loading ? <p className="text-center">Cargando...</p>:(
                products.map(product => (
                    <Card key={product.id} product={product}/>
                ))
            )}
        </Container>
      </div>
    </>
  );
}
