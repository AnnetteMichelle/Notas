import { styled } from "styled-components";

const Styled = {
  Note: styled.div<{ $color: string }>`
    border: 1px solid none;
    border-radius: 13px;
    width: 239px;
    height: 300px;
    margin-top: 13px;
    margin-left: 13px;
    font-size: 14px;
    overflow: scroll;

    ${(props) => {
      if (props.$color) {
        return `background-color:${props.$color};`;
      }
    }}
  `,

  Color: styled.div<{ $color: string }>`
    border-radius: 15px;
    ${(props) => {
      if (props.$color) {
        return `border:6px solid${props.$color};`;
      }
    }}
  `,
  Title: styled.div`
    text-align: center;
    font-weight: bold;
    padding-top: 15px;
    font-size: 17px;
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
    font-family: "calibri";
    padding-left: 15px;
    height: auto;
    padding-top: 10px;
  `,

  Date: styled.div`
    padding-left: 20px;
    font-weight: bolder;
    font-size: 10px;
  `,
};
export default Styled;
