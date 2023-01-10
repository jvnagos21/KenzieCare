import styled from "styled-components";

export const StyledOngList = styled.ul`

    display: flex;
    align-items: center;

    width: 100%;
    height: 100vh;

    background-color: #5271ff;
    background-image: url(/Logo.png);


    ul {
        display: flex;
        flex-direction: row;
        align-items: center;


        gap: 50px;
        
        max-width: 100%;

        overflow-x: auto;

    }
    li{
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        gap: 16px;
        
        width: 300px;
        height: 350px;

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
    
    @media (min-width: 1024px){
        overflow: hidden;
        height: 100vh;
        
        ul{
            flex-direction: row;
            flex-wrap: wrap;
            align-items: unset;


        }
        li{
            height: 400px;
        }
    }

`