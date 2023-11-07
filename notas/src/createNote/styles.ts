import { styled } from "styled-components";

const Styled = {
  CreateContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  CreateNote: styled.div<{ $color: string }>`
    margin-top: 50px;
    min-width: 22%;
    height: auto;
    border: 1px solid #e4e4e4;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    ${(props) => {
      if (props.$color) {
        return `background-color:${props.$color};`;
      }
    }}
  `,
  TitleNote: styled.div`
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
  `,
  Input: styled.div<{ $color: string }>`
    margin-left: 8px;
    margin-right: 8px;
    .ant-input {
      width: auto;
      border-color: #d3d3d3;

      ${(props) => {
        if (props.$color) {
          return `background-color:${props.$color};`;
        }
      }}
    }

    .ant-input-suffix {
      margin-inline-start: 71px;
      color: #ececec;
    }
  `,
  Titles: styled.div`
    margin-left: 8px;
    font-weight: 600;
    color: #484848;
    margin-top: 4px;
    margin-bottom: 4px;
  `,

  button: styled.div`
    margin-top: 15px;
    text-align: center;
  `,

  Date: styled.div`
    font-weight: 600;
    color: #c3c3c3;
  `,

  Buttons: styled.div`
    //margin-top: 36px;
    //margin-left: 13px;
    padding-bottom: 39px;
    padding: 22px;
    display: flex;
    flex-direction: row;
    justify-items: flex-end;
  `,

  ColorPicker: styled.div`
    margin-left: 8px;
  `,
};
export default Styled;
