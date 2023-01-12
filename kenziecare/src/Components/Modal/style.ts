import styled from "styled-components";

export const StyledModal = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, .25);

    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    header{
        display: flex;
        justify-content: space-between;
    }
    p{
        margin-top: 0.625rem;
        margin-left: 1.125rem;

        color: #FFFFFF;
    }
    header button{
        margin-top: 0.625rem;
        margin-right: 0.625rem;
    }
    input{
        margin-left: 1.125rem;

        width: 90%;
        height: 38px;

        border: 1px solid #FFFFFF;
        border-radius: 4px;
    }
    .modalBox{
        width: 95%;
        max-width: 425px;

        background-color: #5271FF;

        border: 1px solid #5271FF;
        border-radius: 4px;
    }
    .containerButton{
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .containerButton button{
        background-color: white;
        color: #5271FF;

        width: 80px;

        font-weight: 700;
    }
`