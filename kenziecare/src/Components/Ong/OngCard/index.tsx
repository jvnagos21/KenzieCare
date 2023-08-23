import { useContext } from "react";
import { iOngs, UserContext } from "../../../Context/UserContext";

interface iOngCardProps {
  ong: iOngs;
}

const OngCard = ({ ong }: iOngCardProps) => {
  const { setShowModal, setTechId } = useContext(UserContext);

  return (
    <li>
      <img src={ong.imagem} alt="" />
      <h2>{ong.name}</h2>
      <p>{ong.estado}</p>
      <span>{ong.areaAtuacao}</span>
      <div>
        <button
          type="submit"
          onClick={() => {
            setShowModal(ong);
            setTechId(ong.id);
          }}
        >
          Editar
        </button>
      </div>
    </li>
  );
};

export default OngCard;
