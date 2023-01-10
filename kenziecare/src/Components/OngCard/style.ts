import styled from "styled-components";

export const StyledOngCard = styled.li`


        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        gap: 16px;
        
        width: 300px;
        height: 350px;

        background-color: white;

        margin-top: 1rem;
        margin-bottom: 1rem;

    img{
        width: 100%;
        height: 200px;
    }

    h2 {
        margin-top: 16px;
        margin-left: 16px;

        font-weight: 400;
        font-size: 16px;

        color: #333333;
    }
    p{
        margin-left: 16px;

        font-weight: 400;
        font-size: 16px;

        color: #333333;
    }
    span{
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

    @media (min-width: 1024px){

        height: 400px;
        
    }
`