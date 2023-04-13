import styled from "styled-components";

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;

  .formulario {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  .label {
    display: flex;
    margin-left: 200px;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .input[type="text"],
  .textarea,
  .selector {
    display: flex;
    margin-left: 325px;
    width: 50%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
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
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path d='M0 0l5 6 5-6z' fill='%23666666'/></svg>");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 10px 10px;
    padding-right: 30px;
  }
`;
