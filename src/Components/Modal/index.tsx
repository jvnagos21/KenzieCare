import React, { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../Context/UserContext";
import { StyledModal } from "./style";

export interface iModalFormValues {
  imagem: string;
  name: string;
  estado: string;
  areaAtuacao: string;
  id: number;
}

const ModalAdmin = () => {
  const { showModal, setShowModal, editOngs, techId } = useContext(UserContext);

  const { register, handleSubmit } = useForm<iModalFormValues>({
    defaultValues: {
      imagem: showModal?.imagem,
      name: showModal?.name,
      estado: showModal?.estado,
      areaAtuacao: showModal?.areaAtuacao,
    },
  });

  const submit: SubmitHandler<iModalFormValues> = (data) => {
    editOngs(techId, data);
  };

  return (
    <StyledModal>
      <div className="modalBox">
        <form onSubmit={handleSubmit(submit)}>
          <header>
            <p>Edite os dados da ONG</p>
            <button type="button" onClick={() => setShowModal(null)}>
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
            {...register("name")}
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
  );
};

export default ModalAdmin;
