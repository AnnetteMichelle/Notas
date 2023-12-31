import { styled } from "styled-components";

const Styled = {
  Notes: styled.div<{ $color: string }>`
    border: 1px solid none;
    border-radius: 13px;
    width: 239px;
    height: 212px;
    margin-top: 13px;
    margin-left: 13px;
    ${(props) => {
      if (props.$color) {
        return `background-color:${props.$color};`;
      }
    }}
  `,

  Title: styled.div`
    text-align: center;
    font-weight: bold;
    font-family: calibri;
    padding-top: 15px;
  `,
  Buttons: styled.div`
    border: 1px solid #e1dddd;
    border-radius: 10px;
    text-align: center;
    margin-top: 14px;
    margin-left: 13px;
    width: 239px;
  `,

  Description: styled.div`
    padding: 10px;
    font-family: "calibri";
  `,

  Date: styled.div`
    padding: 10px;
  `,
};
export default Styled;
