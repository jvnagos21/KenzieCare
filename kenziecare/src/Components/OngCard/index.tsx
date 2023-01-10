import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

interface iOngCardProps {
  ong: iOng;
}

interface iOng {
  userId?: number;
  name: string;
  estado: string;
  areaAtuacao: string;
  imagem: string;
  id: number;
  descricao?: string;
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
            setShowModal(true);
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
