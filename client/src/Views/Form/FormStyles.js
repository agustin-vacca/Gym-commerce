import styled from "styled-components";

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
  margin: 0 auto;


  .formulario {
/*     background-color: #f5f5f5;
 */    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    margin: 0 5% 2% 5%;
    background-image: linear-gradient(45deg, #A8A8A8 0%, #909090  51%, #888888  100%);

    width: 75%;
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


  .formSection{
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-content: center;
  margin: 20px;

  }
.sctionInput{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  place-content: center;



}

.label {
    display: flex;
    margin: auto 1% auto 15%;
    font-weight: bold;
    width: fit-content;



  }

  .input[type="text"],
  .textarea,
  .selector {
    display: flex;
    margin: auto 15% auto 1%;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    resize: none;
  }
  .imgPic{
    max-width:200px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
/*     margin: 20px auto 20px 40px;
 */    place-self: center;
  }
`;