import styled from "styled-components";

export const SectionPrimaryStyled = styled.section`
  width: 100%;
  background-color: #5271ff;
  min-height: 480px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DivPrimaryStyled = styled.div`
  width: 90%;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 80px;
  }

  div > div {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  div > div > h2 {
    font-size: 18px;
    font-weight: 600;
    color: #f5fffb95;
  }

  div > div > p {
    font-size: 45px;
    font-weight: 700;
    color: #f5fffb;
  }

  div > p {
    font-size: 20px;
    font-size: 500;
    color: #f5fffb;
  }
`;

export const DivAnimation = styled.div`
  position: relative;

  img {
    width: 400px;
    position: absolute;
    top: -135px;
    right: 150px;
    border-radius: 10%;
    box-shadow: 0 0 20px 0 #f5fffb;
    
  }

  @keyframes divImgLanding {
    0% {
      opacity: 1;
    }
    17% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    92% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  img:nth-of-type(1) {
    animation-delay: 3s;
  }
  img:nth-of-type(2) {
    animation-delay: 6s;
  }
  img:nth-of-type(3) {
    animation-delay: 9s;
  }
  img:nth-of-type(4) {
    animation-delay: 12s;
  }
  img:nth-of-type(5) {
    animation-delay: 15s;
  }

  img {
    animation-name: divImgLanding;
    /* animation-timing-function: ease-in-out; */
    animation-iteration-count: infinite;
    animation-duration: 15s;
    animation-direction: alternate;
  }
`;
