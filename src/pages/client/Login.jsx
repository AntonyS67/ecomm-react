import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/login/FormLogin";
import { useAuth } from "../../hooks/useAuth";
import Container from "../../partials/client/Container";
import Navbar from "../../partials/client/Navbar";

export default function Login() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) navigate("/");
  }, [auth]);
  return (
    <div className="header-2">
      <Navbar />
      <Container>
        <FormLogin />
      </Container>
    </div>
  );
}
