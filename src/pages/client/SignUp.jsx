import React from "react";
import FormRegister from "../../components/login/FormRegister";
import Container from "../../partials/client/Container";
import Navbar from "../../partials/client/Navbar";

export default function SignUp() {
  return (
    <div className="header-2">
      <Navbar />
      <Container>
        <FormRegister />
      </Container>
    </div>
  );
}
