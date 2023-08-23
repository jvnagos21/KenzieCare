import React, { useContext } from "react";
import { HeaderAdmin } from "../../Components/Header/HeaderAdmin";
import ModalAdmin from "../../Components/Modal";
import OngList from "../../Components/Ong/OngList";
import { UserContext } from "../../Context/UserContext";
import { ContainerAdminDash } from "./style";

const AdminDash = () => {
  const { showModal, logoutAdmin } = useContext(UserContext);

  return (
    <div>
      <HeaderAdmin>
        <div className="containerHeader">
          <img src="/Logo.png" alt="iconLogo" />
          <button onClick={() => logoutAdmin()}>Logout</button>
        </div>
      </HeaderAdmin>
      <ContainerAdminDash>
        <OngList />
        {showModal && <ModalAdmin />}
      </ContainerAdminDash>
    </div>
  );
};

export default AdminDash;
