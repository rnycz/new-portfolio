import styled, { css, FlattenSimpleInterpolation } from "styled-components";

const centerFlex: FlattenSimpleInterpolation = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ulConfig: FlattenSimpleInterpolation = css`
  list-style-type: none;
  padding: 0;
  ${centerFlex}
  flex-flow: row wrap;
`;

export const SkillsContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #fff7e9;
  display: flex;
  flex-direction: column;
  height: 100%;
  h3 {
    margin: 10px 0 0 0;
    text-align: center;
  }
`;

export const Desc = styled.div`
  padding: 20px 15px;
  margin: 0px 20px;
  border-left: 2px solid #fff7e9;
  line-height: 1.4em;
  @media screen and (max-width: 550px) {
    .desc {
      margin: 0 5px;
      padding: 10px 0px 10px 10px;
    }
  }
`;

export const IconsDiv = styled.div`
  ul {
    ${ulConfig}
    li {
      padding: 10px;
      font-size: 4em;
    }
  }
  @media screen and (max-width: 550px) {
    ul {
      li {
        font-size: 3.5em;
      }
    }
  }
`;

export const Icon = styled.span`
  ${centerFlex}
  transition: 0.3s color;
  color: var(--clr);
  &:hover {
    color: #fff7e9;
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  div {
    ${centerFlex}
    flex: 1 300px;
    flex-direction: column;
    ol {
      list-style-type: none;
      padding: 0;
      width: 190px;
      counter-reset: li;
      li {
        padding: 10px;
        border-bottom: 2px solid rgb(197, 197, 197, 0.3);
        position: relative;
        &:before {
          content: counter(li);
          counter-increment: li;
          position: absolute;
          left: -40px;
          top: 50%;
          margin-top: -16px;
          background: #5f9df7;
          height: 32px;
          width: 32px;
          line-height: 32px;
          text-align: center;
          font-weight: bold;
        }
        &:after {
          position: absolute;
          content: "";
          border: 8px solid transparent;
          left: -16px;
          top: 50%;
          margin-top: -8px;
          transition: all 0.3s ease-out;
        }
        &:hover:after {
          left: -8px;
          border-left-color: #5f9df7;
        }
      }
    }
  }
`;

export const OtherStack = styled.div`
  ${centerFlex}
  flex-direction: column;
  ul {
    ${ulConfig}
    li {
      display: flex;
      flex-direction: column;
      padding: 15px;
      font-size: 4em;
      gap: 5px;
      .name {
        text-align: center;
        font-size: 16px !important;
      }
    }
  }
  @media screen and (max-width: 550px) {
    ul {
      li {
        font-size: 3.5em;
      }
    }
  }
`;
