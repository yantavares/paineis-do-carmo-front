import React from "react";
import { useState } from "react";

import { Container, Content } from "./styles";
import googleLogo from "../../assets/google_symbol.svg.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <div
      style={{
        paddingTop: "6rem",
        display: "flex",
        justifyContent: "center",
      }}>
      <Container>
        <h3 className="login-title">Login</h3>
        <p className="login-description">
          Faça login para buscar obras <br /> no nosso banco de dados
        </p>
        <button className="google-btn">
          <img
            src={googleLogo}
            alt=""
          />{" "}
          Entrar com o Google
        </button>
        <div className="divider"></div>
        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}>
          <label className="label-wrapper">
            <p className="input-label">Email</p>
            <input
              type="text"
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label-wrapper">
            <p className="input-label">Senha</p>
            <input
              type="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="flex-group">
            <button className="login-btn">Login</button>
          </div>
        </form>
        <p className="register-cta">
          Não tem uma conta ainda? <a href="register">Registre-se agora</a>
        </p>
      </Container>
    </div>
  );
};
export default LoginPage;
