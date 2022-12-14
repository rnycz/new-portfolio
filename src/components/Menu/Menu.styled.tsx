import styled from "styled-components";

export const MenuElement = styled.ul`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: auto;
  a {
    position: absolute;
    left: 0px;
    transition: 0.6s;
  }
  li {
    position: absolute;
    left: 0px;
    list-style: none;
    transition: 0.6s;
    transform-origin: 200px;
    transform: rotate(90deg) translateX(130px);
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      background: #fff7e9;
      color: var(--clr);
      border: 3px solid var(--clr);
      border-radius: 50%;
      font-size: 2em;
      transform: rotate(calc(360deg / -4 * var(--rotate)));
      transition: 0.8s all;
      cursor: pointer;
      &:hover {
        background: var(--clr);
        color: black;
        box-shadow: 0 0 10px var(--clr), 0 0 30px var(--clr),
          0 0 50px var(--clr);
      }
    }
  }
  &.active {
    li {
      transform: rotate(calc(360deg / 4 * var(--rotate))) translateX(40px);
    }
    a {
      transform: translateY(-33px);
    }
  }
  @media (max-width: 480px) {
    width: 250px;
    a {
      left: -75px !important;
    }
    &.active {
      li {
        transform: rotate(calc(360deg / 4 * var(--rotate))) translateX(70px);
      }
    }
  }
`;

export const MenuToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 75px;
  height: 75px;
  background-color: #181d50;
  border-radius: 50%;
  box-shadow: 0 0 3px 3px #181d50;
  transition: 0.5s transform;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
