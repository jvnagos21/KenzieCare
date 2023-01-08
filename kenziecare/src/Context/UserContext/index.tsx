import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iLoginFormValues } from "../../Pages/LoginPage/@types";
import { iRegisterFormValues } from "../../Pages/RegisterPage/@types";
import { api } from "../../Service/api";
import { iChildren, iUser, iUserLoginResponse, iUserRegisterResponse } from "./@types";

type userContextProps = {
  userRegister: (formData: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
  userLogin: (formData: iLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
  user: iUser
  logout: () => void
}


const UserContext = createContext<userContextProps>({} as userContextProps);

const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUser>({} as iUser);
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
  ) => {
    try {
      setLoading(true);
      await api.post<iUserRegisterResponse>("/register", formData);
      toast.success("Cadastro realizado com sucesso !")
      navigate("/login")
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado !")
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (
    formData: iLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post<iUserLoginResponse>("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@token", response.data.accessToken);
      toast.success("Login efetuado com sucesso !")
      navigate("/home")
    } catch (error) {
      toast.error("Algo deu errado !")
      console.log(error)
    } finally {
      setLoading(false)
    }
  };


  return (
    <UserContext.Provider value={{ user, logout , userLogin, userRegister}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export { UserContext, UserProvider };