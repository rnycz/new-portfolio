import styled from "styled-components";

export const FooterElement = styled.footer`
  color: #c5c5c5;
  font-family: "Oswald", sans-serif;
  font-size: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  span {
    font-size: 0.5em;
  }
  a {
    text-decoration: none;
    padding-bottom: 5px;
    color: #c5c5c5;
    transition: 0.3s color;
    &:hover {
      color: #fff7e9;
    }
  }
`;
