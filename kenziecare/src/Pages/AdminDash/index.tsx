import React, { useContext } from "react";
import { HeaderAdmin } from "../../Components/HeaderAdmin";
import ModalAdmin from "../../Components/Modal";
import OngList from "../../Components/OngList";
import { UserContext } from "../../Context/UserContext";
import { ContainerAdminDash } from "./style";



const AdminDash = () => {

   const { showModal, logoutAdmin } = useContext(UserContext) 
  return (
    <div>
      <HeaderAdmin>
        <div className="containerHeader">
          <img src="/Logo.png" alt="iconLogo" />
          <button onClick={() => logoutAdmin()}>Logout</button>
        </div>
      </HeaderAdmin>
      <ContainerAdminDash>
        <OngList/>
        <ModalAdmin/>
      </ContainerAdminDash>
    </div>
  );
};

export default AdminDash;
