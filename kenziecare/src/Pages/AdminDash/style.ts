import styled from "styled-components";

export const ContainerAdminDash = styled.div`

    display: flex;
    justify-content: center;
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
        height: max-content;

        background-color: white;

        margin-top: 1rem;
        margin-bottom: 1rem;

        border-radius: 8px;

    }
    li img{
        width: 100%;
        height: 200px;

        border-radius: 8px 8px 0 0;
    }

    li h2 {
        margin-top: 16px;
        margin-left: 16px;

        font-weight: 700;
        font-size: 22px;

        color: #5271ff;
    }
    li p{
        margin-left: 16px;

        font-weight: 600;
        font-size: 16px;

        color: #5271ff;
    }
    li span{
        margin-left: 16px;

        font-weight: 600;
        font-size: 16px;

        color: #5271ff;
    }

    .containerHeader{
        display: flex;
        justify-content: flex-end;

        width: 100%;
    }

    button{
        margin-bottom: 20px;
        margin-right: 20px;

        width: 50px;
        height: 28px;

        background-color: #5271ff;
        color: #f5f5f5;

        border: 1px solid #5271ff;
        border-radius: 4px;
    }
    
    @media (min-width: 1024px){
        overflow: hidden;
        height: 150vh;
        
        ul{ 
            width: 100%;

            margin: 0 auto;

            display: grid;
            grid-template-columns: repeat(4, 1fr);


            overflow-x: unset;

            margin-left: 20px;
            margin-right: 20px;


        }
        li{
            height: 400px;
            
        }
    }
    @media (min-width: 1440px){

        height: 100vh;
        ul{
            grid-template-columns: repeat(4, 1fr);

            overflow-x: unset;
        }
    }

`