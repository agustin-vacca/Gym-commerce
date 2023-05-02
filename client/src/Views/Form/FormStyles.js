import styled from "styled-components";

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;

  .componente {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 15px;
  }

  .formulario {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding-left: 1%;
    padding-right: 1%;
  }

  .formSection,
  .title {
    display: flex;
    width: 80%;
    height: 5%;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5%;
  }

  .sctionInput {
    width: 100%;
    height: 100%;
  }

  .p {
    height: fit-content;
    width: 100%;
    border: none;
    font-weight: bold;
    /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
  }
  .formSectionText {
    width: 80%;
    height: 15%;
  }

  .sctionInputText {
    width: 100%;
    height: 100%;
  }

  .input[type="text"],
  .selector,
  .textarea {
    text-align: center;
    display: flex;
    width: 100%;
    height: 100%;
    margin-bottom: 5%;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .sectionImage {
    width: 100%;
    height: fit-content;
  }

  .sctionImage {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 5%;
  }

  .frameimage {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgPic {
    height: 100px;
  }

  .button[type="submit"]:disabled {
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    color: #fff;
    background-color: #333;
  }

  .button[type="submit"]:not([disabled]) {
    background-color: #ff6600;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .button[type="submit"]:not([disabled]):hover {
    background-color: #ff8c1a;
  }

  .selector {
    background-color: #fff;
    appearance: none;
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path d='M0 0l5 6 5-6z' fill='%23666666'/></svg>");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 10px 10px;
  }

  .review {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid blue;
  }
`;
