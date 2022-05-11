import React from "react";
import FormPay from "../../components/pay/FormPay";
import Container from "../../partials/client/Container";
import Navbar from "../../partials/client/Navbar";

export default function Pay() {
  return (
    <div className="header-2">
      <Navbar />
      <Container>
        <FormPay/>
      </Container>
    </div>
  );
}
