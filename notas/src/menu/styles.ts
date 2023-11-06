import { styled } from "styled-components";

const Styled = {
  Links: styled.div`
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  `,

  CreateNote: styled.div`
    padding-bottom: 39px;
    padding: 22px;
    display: flex;
    flex-direction: row;
    justify-items: flex-end;

    /*:where(.css-dev-only-do-not-override-xu9wm8)[class^="ant-dropdown"],
    :where(.css-dev-only-do-not-override-xu9wm8)[class*=" ant-dropdown"] {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS";
    }*/
  `,
  Radios: styled.div`
    margin-left: 11px;
    margin-top: 5px;
  `,
};
export default Styled;
