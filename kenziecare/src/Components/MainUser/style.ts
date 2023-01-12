import styled from "styled-components";
export const MainStyle = styled.main`
  background-color: #5271ff;
  width: 100%;
  height: 100vh;
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 10px auto;
`;

export const CardStyle = styled.li`
  width: 30%;
  height: 80vh;
  padding: 15px auto;
  margin: 15px auto;
  background-color: #f5fffb;
  border: 1px solid #5271ff;
  border-radius: 0 0 8px 8px;

  img {
    width: 100%;
    height: 60%;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 5px 10px;
    padding: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    margin: 5px 10px;
    padding: 0 auto;
  }

  button {
    width: 150px;
    height: 50px;
    font-size: 1rem;
    font-weight: 600;
    color: #f5fffb;
    background-color: #7ed957;
    border: 1px solid #7ed957;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
  }
`;
