import styled from "styled-components";

export const UserBtnDiv = styled.div`
  padding: 0.5em;
  position: relative;
  border: 1px solid grey;
  border-radius: 15px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .Menu {
    position: absolute;
    top: 3em;
    right: 0em;
    z-index: 100;
  }

  .Ul {
    min-width: 15em;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    border: 1px solid grey;
    border-radius: 1em;
    list-style: none;
    background: #ffff;
  }

  .Li {
    color: #000;
  }

  .Li:hover {
    text-decoration: underline;
  }
`;
