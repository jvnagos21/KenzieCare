import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 40px 0;
  background-color: #5271ff;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/Logo.png");
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 500px;
  border: 2px solid #7ed957;
  padding: 25px;
  border-radius: 5px;
  background-color: #f5fffb;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div > h1 {
    font-size: 28px;
    font-weight: 900;
    color: #5271ff;
  }

  @media (max-width: 375px) {
    max-width: 375px;
    margin-bottom: 47px;
    border-radius: 0;
  }

  @media (max-width: 320px) {
    max-width: 320px;
    margin-bottom: 35px;
    border-radius: 0;
  }


`;

export const TitleForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: #333333;
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const SpanFormStyled = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #7ed957;

  @media (max-width: 320px) {
    margin-right: 40px;
    line-height: 25px;
  }
`;

export const ButtonFormStyled = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #7ed957;
  color: #f5fffb;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px 0 #7ed957;
    font-size: large;
  }
`;

export const LinkToLandingPage = styled(Link)`
  text-align: center;
  background-color: #5271ff;
  color: #f5fffb;
  text-decoration: none;
  padding: 15px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    box-shadow: 0 0 5px 0 #5271ff;
  }
`;

export const ClickLogo = styled(Link)`
  img {
    width: 150px;
    cursor: pointer;
  }
`;
