import React, { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import OngCard from "../OngCard";
import { StyledOngList } from "./style";

const OngList = () => {
  const { ong } = useContext(UserContext);

  return (
    <StyledOngList>
      {ong.map((ong) => {
        return <OngCard ong={ong} />;
      })}
    </StyledOngList>
  );
};

export default OngList;
