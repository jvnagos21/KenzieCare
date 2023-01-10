import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório !")
    .min(2, "É necessário ter no mínimo 2 dígitos."),

  email: yup
    .string()
    .required("O e-mail é obrigatório !")
    .email("O e-mail digitado é inválido !"),

  password: yup
    .string()
    .required("A senha é obrigatória !")
    .matches(/(?=.*?[A-Z])/, "É necessário um letra maíuscula.")
    .matches(/(?=.*?[a-z])/, "É necessário um letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caracter especial."
    )
    .min(8, "É necessário ter no mínimo 8 dígitos."),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Digite a mesma senha !")
});
