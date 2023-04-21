import styled from "styled-components";

export const UserBtnDiv = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Menu {
    position: absolute;
    top: 3em;
    right: 0em;
    z-index: 100;
    //border: 1px solid red;
  }
  .profile {
    border-bottom: #333;
    border-bottom: 1px solid #333;
    margin-bottom: 1rem;
  }
  .profileName {
    color: #333;
  }
  .profileImg {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  .Ul {
    min-width: 10em;
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
    text-decoration: none;
  }

  .Li:hover {
    color: darkcyan;
    text-decoration: underline;
    cursor: pointer;
  }
`;
