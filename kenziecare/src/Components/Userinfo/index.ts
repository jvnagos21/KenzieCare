import { Link } from "react-router-dom";
import styled from "styled-components";

export const Userinfo = styled(Link)`
  display: flex;
  align-items: baseline;
  text-decoration: none;
  img:first-child {
    width: 60px;
    height: 60px;
    border: 1px solid #333333;
    border-radius: 100%;
  }
`;
