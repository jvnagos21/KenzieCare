import styled from "styled-components";

export const HeaderAdmin = styled.header`

    display: flex;
    align-items: center;

    width: 100%;
    height: 80px;

    background-color: #7ed95725;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
    }

    img{
        width: 150px;
        height: 60px;
    }
    button{
        width: 60px;
        height: 28px;

        margin-right: 20px;

        background-color: #5271FF;
        color: white;

        border: 1px solid #5271FF;
        border-radius: 4px;
    }
`