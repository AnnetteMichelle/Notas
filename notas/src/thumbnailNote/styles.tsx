import { styled } from "styled-components";

const Styled = {
  Note: styled.div<{ $color: string }>`
    border: 1px solid none;
    border-radius: 13px;
    width: 239px;
    height: 227px;
    margin-top: 13px;
    margin-left: 13px;
    font-size: 14px;
    box-shadow: 2px;
    ${(props) => {
      if (props.$color) {
        return `background-color:${props.$color};`;
      }
    }}
  `,
  Color: styled.div<{ $color: string }>`
    background-color: #ffffff;
    border-radius: 15px;
    margin-top: 8px;
    height: 180px;
    ${(props) => {
      if (props.$color) {
        return `border:6px solid${props.$color};`;
      }
    }}
  `,
  Title: styled.div`
    text-align: center;
    font-weight: bold;
    //font-family: calibri;
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
    padding: 10px;
    font-family: "calibri";
    padding-left: 15px;
    padding-top: 4px;
    //margin-top: 10px;
  `,

  Date: styled.div`
    padding: 10px;
    //margin-top: 19px;
  `,
};
export default Styled;
