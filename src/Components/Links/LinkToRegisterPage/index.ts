import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkTo = styled(Link)`
    font-size: 16px;
    font-weight: 500;
    color: #5271FF;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`