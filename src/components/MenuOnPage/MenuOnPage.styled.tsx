import styled from "styled-components";

export const MenuOnPageElement = styled.div`
  ul {
    transition: 0.3s all ease-in-out;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0;
    left: -10px;
    background-color: #1e1f23;
    border-bottom-right-radius: 50%;
    box-shadow: 5px 5px 3px #1e1f23;
    z-index: 10;
    a {
      position: absolute;
      &:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        left: 45px;
        top: 45px;
        width: 50px;
        height: 50px;
        background: #fff7e9 !important;
        color: gray !important;
        border: 2px solid gray;
        border-radius: 50%;
        font-size: 1em;
        transition: 0.8s all;
        &:hover {
          background: gray !important;
          color: black !important;
          box-shadow: 0 0 8px gray, 0 0 9px gray, 0 0 10px gray;
        }
      }
      &:nth-child(2) {
        left: 10px;
        top: 130px;
      }
      &:nth-child(3) {
        left: 130px;
        top: 10px;
      }
      &:nth-child(4) {
        left: 75px;
        top: 120px;
      }
      &:nth-child(5) {
        left: 120px;
        top: 75px;
      }
    }
    li {
      list-style-type: none;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background: #fff7e9;
        color: var(--clr);
        border: 2px solid var(--clr);
        border-radius: 50%;
        font-size: 1em;
        transition: 0.8s all;
        cursor: pointer;
        &:hover {
          background: var(--clr);
          color: black;
          box-shadow: 0 0 8px var(--clr), 0 0 9px var(--clr),
            0 0 10px var(--clr);
        }
      }
      .active {
        background: var(--clr);
        color: black;
        box-shadow: 0 0 8px var(--clr), 0 0 9px var(--clr), 0 0 10px var(--clr);
      }
    }
  }
`;
