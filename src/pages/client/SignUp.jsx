import React,{useEffect} from "react";
import FormRegister from "../../components/login/FormRegister";
import { useAuth } from "../../hooks/useAuth";
import Container from "../../partials/client/Container";
import Navbar from "../../partials/client/Navbar";
import {useNavigate} from "react-router-dom"

export default function SignUp() {
  const {auth} = useAuth()
  const navigate = useNavigate()
  useEffect(()=>{
    if(auth) navigate('/')
  },[auth])
  return (
    <div className="header-2">
      <Navbar />
      <Container>
        <FormRegister />
      </Container>
    </div>
  );
}
