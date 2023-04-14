import styled from "styled-components";

export const SearchBarDiv = styled.div`
  .search {
    position: relative;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    padding: 10px;
    transition-duration: 500ms;
    cursor: pointer;
    background-repeat: no-repeat;
    font-size: 10px;
    color: transparent;
    border: 1px solid #fff;
    overflow: hidden;
    background-size: 22px;
    background-position: 50% 45%;
  }

  .search:hover {
    cursor: pointer;
    border: 1px solid rgb(255, 238, 0);
    background-size: 22px;
    background-position: 50% 45%;
  }

  .search:focus {
    width: 300px;
    cursor: pointer;
    padding-left: 40px;
    color: #fff;
    outline: none;
    border: 1px solid rgb(255, 238, 0);
    background-color: #333;
    background-size: 22px;
    background-position: 10px 50%;
  }

  .lupa {
    color: white;
  }

  /* .input{
    background-color: rgba(255, 255, 255, 0.712);
    height: 2.5rem;
    width: 24rem;
    border-radius: 10px;
    font-weight: 700;
    border: none;
}

.button{
    background-color: rgba(167, 167, 167, 0.849);
    border-radius: 10px;
    font-weight: 900;
    height: fit-content;
    border: none;
  } */
`;
