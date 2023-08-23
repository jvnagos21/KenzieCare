import styled from "styled-components";

const HeaderUser = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7ed95725;

  div:first-child {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export default HeaderUser;
