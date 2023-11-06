import { styled } from "styled-components";

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
      border-color: #bfbebebd;

      ${(props) => {
        if (props.$color) {
          return `background-color:${props.$color};`;
        }
      }}
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
    margin-top: 36px;
    margin-left: 13px;
  `,

  ColorPicker: styled.div`
    margin-left: 8px;
  `,
};
export default Styled;
