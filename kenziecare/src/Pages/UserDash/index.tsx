import React from "react";
import { BtnLogout } from "../../Components/Button/ButtonLogout";
import { ClickLogo } from "../../Components/Form";
import HeaderUser from "../../Components/Header/HeaderUser/index";
import { MainUser } from "../../Components/Main/MainUser";
import { Userinfo } from "../../Components/UserInfo/index";
import Logout from "../../imgs/logout.svg";

const usuario: any = localStorage.getItem("userInfo");
const userTratado = JSON.parse(usuario);
const UserDash = () => {
  return (
    <div>
      <HeaderUser>
        <ClickLogo to="/userdash">
          <img src="/Logo.png" alt="iconLogo" />
        </ClickLogo>
        <Userinfo to="/profile">
          <img src={userTratado.foto} alt="foto de perfil do usuario" />
          <h4>{userTratado.name}</h4>
        </Userinfo>
        <BtnLogout to="/">
          <img src={Logout} />
        </BtnLogout>
      </HeaderUser>
      <MainUser />
    </div>
  );
};
export default UserDash;
