import React from "react";
import FormLogin from "../../components/login/FormLogin";
import Container from "../../partials/client/Container";
import Navbar from "../../partials/client/Navbar";

export default function Login() {
  return (
    <div className="header-2">
      <Navbar />
      <Container>
       <FormLogin/>
      </Container>
    </div>
  );
}
