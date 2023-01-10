import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../../Components/Input";
import { iLoginFormValues } from "./@types";
import { LoginSchema } from "./LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "../../Components/Header";
import {
  ButtonFormStyled,
  ClickLogo,
  FormStyled,
  LinkToLandingPage,
  MainStyled,
  SpanFormStyled,
  TitleForm,
} from "../../Components/Form";
import { LinkTo } from "../../Components/Links/LinkToRegisterPage";
import { UserContext } from "../../Context/UserContext";

const LoginPage = () => {
  const { userLogin, setLoading, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    resolver: yupResolver(LoginSchema),
  });

  const submit = (data: iLoginFormValues) => {
    userLogin(data, setLoading);
  };

  return (
    <div>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <Header>
            <div>
              <ClickLogo to="/landing">
                <img src="/Logo.png" alt="iconLogo" />
              </ClickLogo>
              <LinkToLandingPage to="/landing">Home</LinkToLandingPage>
            </div>
          </Header>
          <MainStyled>
            <FormStyled noValidate onSubmit={handleSubmit(submit)}>
              <TitleForm>
                <h1>Login</h1>
              </TitleForm>
              <InputForm
                type="email"
                id="email"
                label="Email"
                placeholder="Digite aqui seu email"
                disabled={loading}
                register={register("email")}
                error={errors?.email ? "*Email incorreto !" : ""}
              />
              <InputForm
                type="password"
                id="password"
                label="Senha"
                placeholder="Digite sua senha aqui"
                disabled={loading}
                register={register("password")}
                error={errors?.password ? "*Senha incorreta !" : ""}
              />
              <ButtonFormStyled>
                {loading ? "Entrando..." : "Entrar"}
              </ButtonFormStyled>
              <SpanFormStyled>
                Não possui uma conta ?{" "}
                <LinkTo to="/register">Cadastre-se aqui</LinkTo>
              </SpanFormStyled>
            </FormStyled>
          </MainStyled>
        </>
      )}
    </div>
  );
};

export default LoginPage;
