import styled from "styled-components";

export const SectionStepbyStep = styled.section`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

export const DivFigureSteps = styled.div`
  :first-child{
    margin-bottom: 30px;
  }
  
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px;
  gap: 25px;

  figure {
    width: 120px;
    height: 120px;
  }

  figure > img {
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #5271ff95;
    text-align: center;
    margin-right: 5px;
  }

  span {
    text-align: center;
    line-height: 25px;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const LineSteps = styled.img`
  width: 120px;
  margin-bottom: 200px;
`;

export const FigureSecundary = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  max-height: 200px;
  position: relative;
  background-color: #7ed95725;

  img {
    width: 180px;
    position: absolute;
    top: -10px;
    left: 35px;
  }
`

