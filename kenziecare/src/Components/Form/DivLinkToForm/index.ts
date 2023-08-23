import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 35px;
`

export const LinkToForm = styled(Link)`
    text-align: center;
    background-color: #5271FF;
    color: #f5fffb;
    text-decoration: none;
    padding: 15px 0;
    width: 150px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;

    &:hover {
        box-shadow: 0 0 5px 0 #5271FF;
    }
`