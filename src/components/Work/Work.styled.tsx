import styled from "styled-components";

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  color: #fff7e9;
`;

export const WorkExp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    text-align: center;
  }
  p {
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
    margin: 0px 20px;
    border-left: 2px solid #fff7e9;
    gap: 8px;
    span {
      line-height: 1.4em;
    }
  }
  @media screen and (max-width: 550px) {
    p {
      margin: 0 5px;
      padding: 10px 0px 10px 10px;
    }
  }
`;

export const WorkProjects = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ProjectsElement = styled.div`
  flex: 1 200px;
  height: 100%;
  color: #fff7e9;
  h3 {
    text-align: center;
    width: 80%;
  }
  ul {
    list-style-type: none;
    width: 80%;
    padding: 0;
    li {
      padding: 13px 10px;
      transition: 0.5s all ease-out;
      border-bottom: 2px solid #fff7e9;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      &:first-child {
        border-top: 2px solid #fff7e9;
      }
      &:hover {
        a {
          margin-left: 0px;
          color: #c5c5c5;
          .arrow {
            opacity: 1;
          }
        }
      }
      a {
        transition: 0.5s all ease-out;
        text-decoration: none;
        color: #fff7e9;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin-left: -30px;
        .arrow {
          transition: 0.5s opacity ease-out;
          font-size: 1.5em;
          opacity: 0;
          color: #ff731d;
        }
      }
      span {
        display: flex;
        .green-eye {
          color: #009933;
        }
        .red-eye {
          color: #cc0000;
        }
      }
    }
  }
  @media screen and (max-width: 550px) {
    ul {
      width: 100%;
    }
    h3 {
      width: 100%;
    }
  }
`;

export const Images = styled.div`
  flex: 1 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 780px) {
    flex: 1 370px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.8s all;
  img {
    width: 80%;
    border-radius: 5px;
  }
  p {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0;
  }
  @media screen and (max-width: 780px) {
    img {
      width: 70%;
    }
  }
  @media screen and (max-width: 550px) {
    img {
      width: 100%;
    }
  }
`;
