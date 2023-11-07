import styled from "styled-components";

const Styled = {
  EditContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  EditNote: styled.div<{ $color: string }>`
    margin-top: 50px;
    min-width: 22%;
    height: auto;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    ${(props) => {
      if (props.$color) {
        return `background-color:${props.$color};`;
      }
    }}
  `,
  TitleEdit: styled.div`
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
  `,
  Input: styled.div<{ $color: string }>`
    margin-left: 8px;
    margin-right: 8px;

    .ant-input {
      border-color: #42424259;

      ${(props) => {
        if (props.$color) {
          return `background-color:${props.$color};`;
        }
      }}
    }

    .ant-input-affix-wrapper {
      background-color: #fff0;
      border-color: #42424259;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      color: #dcdbdb;
    }
  `,
  Titles: styled.div`
    margin-left: 8px;
    margin-bottom: 4px;
    font-weight: 600;
    color: #262626;
    margin-top: 4px;
  `,

  button: styled.div`
    margin-top: 15px;
    text-align: center;
  `,

  Date: styled.div`
    font-weight: 600;
    color: #6f6f6f;
  `,

  Buttons: styled.div`
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
