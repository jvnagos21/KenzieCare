import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../Context/UserContext";
import { iLoginFormValues } from "../../Pages/LoginPage/@types";
import { StyledModal } from "./style";

export interface iModalFormValues {
  imagem: string;
  nome: string;
  estado: string;
  areaAtuacao: string;
  id: number;
}

const ModalAdmin = () => {

  const { showModal, setShowModal, editOngs , techId } = useContext(UserContext);

  const { register, handleSubmit } = useForm<iModalFormValues>({});

  const submit: SubmitHandler<iModalFormValues> = (data) => {
    editOngs(techId ,data)
  };
  
  return (
    <>
      {showModal && (
        <StyledModal>
          <div className="modalBox">
            <form onSubmit={handleSubmit(submit)}>
              <header>
                <p>Edite os dados da ONG</p>
                <button type="button" onClick={() => setShowModal(false)}>
                  X
                </button>
              </header>
              <input
                type="text"
                placeholder="Edite a logo da ONG"
                {...register("imagem")}
              />
              <input
                type="text"
                placeholder="Edite o nome da ONG"
                {...register("nome")}
              />
              <input
                type="text"
                placeholder="Edite o estado da ONG"
                {...register("estado")}
              />
              <input
                type="text"
                placeholder="Edita a area de atuação"
                {...register("areaAtuacao")}
              />
              <div className="containerButton">
                <button type="submit">Confirmar</button>
              </div>
            </form>
          </div>
        </StyledModal>
      )}
    </>
  );
};

export default ModalAdmin;
