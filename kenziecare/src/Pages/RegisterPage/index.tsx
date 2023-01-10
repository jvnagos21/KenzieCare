import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../../Components/Input";
import { iRegisterFormValues } from "./@types";
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
import { RegisterSchema } from "./RegisterSchema";
import { UserContext } from "../../Context/UserContext";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({
    resolver: yupResolver(RegisterSchema),
  });

  const submit = (data: iRegisterFormValues) => {
    userRegister(data, setLoading);
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
                <h1>Cadastro</h1>
              </TitleForm>
              <SpanFormStyled>
                Já possui uma conta ?{" "}
                <LinkTo to="/login">Faça aqui seu login</LinkTo>
              </SpanFormStyled>
              <InputForm
                id="name"
                type="text"
                key="name"
                label="Nome"
                placeholder="Digite seu nome"
                register={register("name")}
                disabled={loading}
              />
              <InputForm
                id="email"
                type="email"
                key="email"
                label="Email"
                placeholder="Digite seu email"
                register={register("email")}
                disabled={loading}
                error={errors?.email && "Esse email já existe !"}
              />
              <InputForm
                id="password"
                type="password"
                key="password"
                label="Senha"
                placeholder="Digite sua senha"
                register={register("password")}
                disabled={loading}
                error={errors?.password ? "Digite uma senha melhor" : ""}
              />
              <InputForm
                id="confirmPassword"
                type="password"
                key="confirmPassword"
                label="Confirme sua senha"
                placeholder="Confirme sua senha"
                disabled={loading}
                register={register("confirmPassword")}
                error={errors?.confirmPassword ? "Digite uma senha melhor" : ""}
              />
              <ButtonFormStyled>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </ButtonFormStyled>
            </FormStyled>
          </MainStyled>
        </>
      )}
    </div>
  );
};

export default RegisterPage;
