import styled from "styled-components";

export const Componente = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;

  .title {
    position: sticky;
    top: 1px;
    display: flex;
    font-size: large;
    justify-content: space-around;
    background: white;
    border-radius: 10px;
    gap: 1px;
    font-weight: bold;
  }
  .eachTitleId {
    width: 20%;
    border-radius: 5px;
    border: 1px solid #999;
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  }
  .eachTitleAdmin {
    width: 50%;
    border-radius: 5px;
    border: 1px solid #999;
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  }
  .eachTitle {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #999;
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  }

  .marcoCards {
    border-radius: 5px;
    border: 1px solid #999;
  }
  .userCards {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

//  border: 2px solid red;
