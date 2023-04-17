import styled from "styled-components";

export const SearchBarDiv = styled.div`
  .search {
    padding: 0.3em;
    border-radius: 50px;
    border: 1px solid #333;
    text-align: center;
    background: black;
    width: 335px;
    cursor: pointer;
    font-size: larger;
  }    

  .search:focus {
    width: 300px;
    padding-left: 40px;
    color: #fff;
    outline: none;
    border: 1px solid rgb(255, 238, 0);
    background-color: black;
    background-size: 22px;
    background-position: 10px 50%;
  }

  .lupa {
    color: olivedrab;
  }

  .comb {
    padding: 0.3em;
    display: flex;
    justify-content: space-evenly;
    gap: 0.2rem;
    border: 1px solid grey;
    border-radius: 50px;
  }
  .btn {
    border-radius: 20px;
    cursor: pointer;
  }
`;

/* 
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
 */
