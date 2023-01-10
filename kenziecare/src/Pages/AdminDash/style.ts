import styled from "styled-components";

export const ContainerAdminDash = styled.div`

    display: flex;

    width: 100%;
    height: 200vh;

    background-color: #5271ff;
    background-image: url(/Logo.png);

    overflow-y: scroll; 
    ul {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;

        gap: 50px;
        
        width: 100%;
        height: 100%;

        margin-top: 4rem;
        margin-bottom: 4rem;


    }
    li{
        display: flex;
        flex-direction: column;
        gap: 16px;
    
        width: 350px;

        background-color: white;

        margin-top: 1rem;
        margin-bottom: 1rem;
        


    }
    li img{
        width: 100%;
        height: 200px;
    }

    li h2 {
        margin-top: 16px;
        margin-left: 16px;

        font-weight: 400;
        font-size: 16px;

        color: #333333;
    }
    li p{
        margin-left: 16px;

        font-weight: 400;
        font-size: 16px;

        color: #333333;
    }
    li span{
        margin-left: 16px;

        font-weight: 400;
        font-size: 16px;

        color: #333333;
    }

    div{
        display: flex;
        justify-content: flex-end;

        width: 100%;
    }

    button{
        margin-bottom: 20px;
    }
`