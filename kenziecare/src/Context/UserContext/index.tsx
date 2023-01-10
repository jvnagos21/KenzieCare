import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iLoginFormValues } from "../../Pages/LoginPage/@types";
import { iRegisterFormValues } from "../../Pages/RegisterPage/@types";
import { api } from "../../Service/api";
import {
  iChildren,
  iUser,
  iUserLoginResponse,
  iUserRegisterResponse,
} from "./@types";

type userContextProps = {
  userRegister: (
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userLogin: (
    formData: iLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  user: iUser;
  logout: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

const UserContext = createContext<userContextProps>({} as userContextProps);

const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUser>({} as iUser);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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

  return (
    <UserContext.Provider
      value={{ user, logout, userLogin, userRegister, setLoading, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export { UserContext, UserProvider };
