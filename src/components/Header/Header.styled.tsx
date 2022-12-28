import styled from "styled-components";

export const HeaderElement = styled.header`
  font-family: "Oswald", sans-serif;
  font-size: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  a {
    text-decoration: none;
    color: #c5c5c5;
    transition: 0.3s color;
    &[href="/"] {
      margin-top: -5px;
    }
    &:hover {
      color: #fff7e9;
    }
  }
  span {
    margin-left: -8px;
    z-index: 11;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  gap: 30px;
  font-size: 0.9em;
  a {
    display: flex;
    align-items: center;
    transition: 0.3s all;
    color: #c5c5c5;
    &:hover {
      color: #fff7e9;
      transform: translateY(-3px);
    }
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const LanguageSwitch = styled.div`
  cursor: pointer;
  transition: 0.3s all;
  color: #c5c5c5;
  &:hover {
    color: #fff7e9;
  }
`;
