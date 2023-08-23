import styled from "styled-components";

export const SectionSecundaryStyled = styled.section`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const DivSecundaryStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const IconPrimaryStyled = styled.figure`
    max-height: 200px;

    img {
        margin-top: 45px;
    }
`

export const DivHowitWorksStyled = styled.div`
    width: 40%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;
    margin-bottom: 0px;

    h2 {
        font-size: 36px;
        font-weight: 700;
        color: #5271ff;
    }

    h2 > img {
        width: 25px;
        height: 25px;
    }

    p {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: #3a2a45;
        line-height: 25px;
    }
`