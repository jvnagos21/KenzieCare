import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iModalFormValues } from "../../Components/Modal";
import { iLoginFormValues } from "../../Pages/LoginPage/@types";
import { iRegisterFormValues } from "../../Pages/RegisterPage/@types";
import { api } from "../../Service/api";
import {
  iChildren,
  iUser,
  iUserLoginResponse,
  iUserRegisterResponse,
} from "./@types";

export interface iOngs{
  userId: number;
  name: string;
  estado: string;
  areaAtuacao: string;
  imagem: string;
  id: number;
  descricao: string;
}
type userContextProps = {
  userRegister: (formData: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
  userLogin: (formData: iLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
  user: iUser
  logout: () => void
  ong: iOngs[] | []
  setOng: React.Dispatch<React.SetStateAction<iOngs[] | []>>  
  showModal: iOngs | null;
  setShowModal: React.Dispatch<React.SetStateAction<iOngs | null>>;
  editOngs: (id: number | null, formData: iModalFormValues) => void;
  logoutAdmin: () => void
  setTechId: React.Dispatch<React.SetStateAction<number | null>>;
  techId: number | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const UserContext = createContext<userContextProps>({} as userContextProps);

  const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUser>({} as iUser);
  const [ong, setOng] = useState<iOngs[] | []>([])
  const [showModal, setShowModal] = useState<iOngs | null>(null)
  const [techId, setTechId] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()  

  // useEffect(() => {
  //   async function autoLogin() {
  //     const getToken = localStorage.getItem("@token");
  //       if(getToken){
  //         try {
  //           const response = await api.get("/login", {
  //             headers: {
  //               Authorization : `Bearer ${getToken}`
  //             }
  //           });
  //           setUser(response.data);
  //           navigate("/home")
  //         } catch (error) {
  //           console.log(error);
  //           localStorage.removeItem("@token");
  //           navigate("/");
  //         }
  //     } else {
  //       navigate("/");
  //     }
  //   };
  //   autoLogin();
  // }, []);

  const logout = () => {
    // setUser({});
    localStorage.removeItem("@token");
  };

  const userRegister = async (
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    try {
      const newData = { ...formData, is_admin: false };
      console.log(newData);
      setLoading(true);
      await api.post<iUserRegisterResponse>("/register", newData);
      toast.success("Cadastro realizado com sucesso !");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado !");
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (
    formData: iLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.post<iUserLoginResponse>("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@token", response.data.accessToken);
      toast.success("Login efetuado com sucesso !");
      if (response.data.user.is_admin) {
        navigate("/admindash");
      } else {
        navigate("/userdash");
      }
    } catch (error) {
      toast.error("Algo deu errado !");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const Ongs = async () => {

      try {
        const response = await api.get("/ONGs")
        setOng(response.data)
      } catch (error) {
        console.log(error)
      }
  
    }
    Ongs()
  }, []);  
  const editOngs = async (id: number | null,formData: iModalFormValues) => {
    console.log(formData)
    console.log(id)
    const token = localStorage.getItem("@token")
    try {
      const response = await api.patch(`/ONGs/${id}`, formData,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const newOngs = ong.map((o) => {
        if(o.id === id){
          return response.data
        }else{
          return o
        }
      })
      setOng(newOngs)
      setShowModal(null)
    } catch (error) {
      console.log(error)
    }
  }
  const logoutAdmin = () => {

    localStorage.removeItem("@token")
    navigate("/")

  }

  return (
    <UserContext.Provider value={{ user, logout , userLogin, userRegister, ong, setOng, showModal, setShowModal, editOngs, logoutAdmin, setTechId, techId, loading, setLoading}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export { UserContext, UserProvider };
