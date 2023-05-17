import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  font-family: "Montserrat", sans-serif;
`;

export const AboutMeDesc = styled.div`
  flex: 1 350px;
  color: #fff7e9;
  padding: 10px;
  p {
    line-height: 1.6em;
    text-align: justify;
  }
`;

export const Photo = styled.div`
  flex: 1 310px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 5px;
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 250px;
  position: relative;
`;

const handleType = (index: Number) => {
  switch (index) {
    case 1:
      return `clip-path: polygon(30% 0, 0 30%, 0 0);
            transform: translate(-8px, -8px);`;
    case 2:
      return "clip-path: polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%);";
    case 3:
      return `clip-path: polygon(100% 70%, 70% 100%, 100% 100%);
            transform: translate(8px, 8px);`;
  }
};
type PropsImg = {
  index: number;
};
export const Image = styled.img<PropsImg>`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  ${({ index }) => handleType(index)};
  transition: transform 0.3s ease;
  ${ImageWrapper}:hover & {
    transform: translate(0, 0);
  }
`;

export const Resume = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 10px;
  position: relative;
  .info {
    position: absolute;
    top: 55px;
    left: 0px;
    text-align: center;
    display: none;
    color: #fff7e9;
    width: 100%;
  }
  button {
    width: 100px;
    text-align: center;
    color: #fff7e9;
    text-decoration: none;
    padding: 12px;
    transition: 0.5s all ease-in-out;
    outline: 2px solid #ff731d;
    border: 2px solid #ff731d;
    outline-offset: -2px;
    transition: outline-offset 0.2s ease-in-out;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      outline-offset: -7px;
      + .info {
        display: block;
      }
    }
  }
`;
