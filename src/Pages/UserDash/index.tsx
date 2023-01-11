import React from "react";
import { BtnLogout } from "../../Components/BtnLogout";
import { ClickLogo } from "../../Components/Form";
import { Header } from "../../Components/Header";
import { MainUser } from "../../Components/MainUser";
import { Userinfo } from "../../Components/Userinfo";
import Logout from "../../imgs/logout.svg";

const UserDash = () => {
  return (
    <div>
      <Header>
        <ClickLogo to="/userdash">
          <img src="/Logo.png" alt="iconLogo" />
        </ClickLogo>
        <Userinfo to="/profile">
          <img
            src="https://static-cse.canva.com/blob/759723/DrobotDeanCanva.jpg"
            alt="foto de perfil do usuario"
          />
          <h4>João Alberto</h4>
        </Userinfo>
        <BtnLogout to="/">
          <img src={Logout} />
        </BtnLogout>
      </Header>
      <MainUser />
    </div>
  );
};

export default UserDash;
