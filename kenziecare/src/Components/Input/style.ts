import styled from "styled-components";


export const InputStyled = styled.div` 
    width: 100%;

    fieldset{
        width: 100%;
        max-width: 470px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
        border: none;
    }

    label {
        font-size: 18px;
        font-weight: 700;
        color: #5271FF;
    }

    input {
        width: 100%;
        height: 50px;
        padding: 0 15px;
        border-radius: 8px;
        border: none;
        background-color: #f5fffb;
        font-size: 16px;
        font-weight: 400;
        color: #000000;
        outline: none;
        background-color: #f5fffb;
        border: 2px solid #7ED957;
    }

    @media(max-width: 768px){
        input {
            width: 90%;
        }
    }

    @media(max-width: 600px){
        input {
            width: 90%;
        }
    }

    @media(min-width: 1024px){
        input {
            width: 90%;
        }
    }



    input:focus {
        outline: 1px solid #7ED957;
    }

    input::placeholder{
        color: #5271FF50;
    }

    p{
        font-size: 12px;
        font-weight: 400;
        color: #E60000;
    }
`
