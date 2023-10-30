import { styled } from "styled-components";

const Styled = {
  CreateNote: styled.div<{ $color: string }>`
    border: 1px solid #e4e0e0;
    margin-left: 742px;
    margin-top: 115px;
    width: 22%;
    border-radius: 20px;
    height: auto;
    margin-top: 34px;

    ${(props) => {
      if (props.$color) {
        return `background-color:${props.$color};`;
      }
    }}
  `,
  TitleNote: styled.div`
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 20px;
    text-align: center;
    margin-top: 23px;
    font-weight: bold;
  `,
  Input: styled.div<{ $color: string }>`
    margin-left: 113px;

    .ant-input {
      width: auto;
      border-color: #d3d3d3;

      ${(props) => {
        if (props.$color) {
          return `background-color:${props.$color};`;
        }
      }}
    }
    /*.ant-input:hover {
      ${(props) => {
      if (props.$color) {
        return `border-color:${props.$color};`;
      }
    }}
    }*/
  `,
  Titles: styled.div`
    margin-left: 113px;
    margin-top: 19px;
    padding-bottom: 4px;
    font-weight: 600;
  `,

  ColorPicker: styled.div`
    margin-left: 113px;
  `,

  button: styled.div`
    margin-top: 36px;
    text-align: center;
  `,

  Date: styled.div`
    font-weight: 600;
    color: #aaa9a9;
  `,
};
export default Styled;
