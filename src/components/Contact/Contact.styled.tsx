import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 400px;
`;

export const ContactCell = styled.div`
  flex: 1 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff7e9;
  font-family: "Montserrat", sans-serif;
  .contact-copy {
    font-size: 1.2em;
    cursor: pointer;
    position: relative;
    transition: 0.3s all;
    &:hover {
      color: #c5c5c5;
      transform: translate(3px, -3px) scale(1.1);
    }
  }
  .contact-icons {
    font-size: 3em;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
      color: #c5c5c5;
    }
    &:hover + .contact-copy {
      transform: translate(3px, -3px) scale(1.1);
      color: #c5c5c5;
    }
  }
  p {
    font-size: 1.2em;
  }
`;

export const CopyDone = styled.div`
  position: absolute;
  top: -35px;
  left: -70px;
  width: max-content;
  font-size: 0.9em;
  background-color: #181d50;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 10px 5px #181d50;
  transition: 0.3s all;
`;

export const OpenGithub = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff7e9;
  text-decoration: none;
  transition: 0.3s all;
  &:hover {
    color: #c5c5c5;
    transform: translateY(-3px);
  }
`;
