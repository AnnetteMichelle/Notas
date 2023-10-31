import { styled } from "styled-components";

const Styled = {
  Links: styled.div`
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    padding-bottom: 39px;
    padding: 22px;
  `,

  CreateNote: styled.div`
    margin-top: -32px;
    margin-left: 79px;

    :where(.css-dev-only-do-not-override-xu9wm8)[class^="ant-dropdown"],
    :where(.css-dev-only-do-not-override-xu9wm8)[class*=" ant-dropdown"] {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS";
    }
  `,
  Radios: styled.div`
  margin-left: 337px;
  margin-top: -22px;
}

  `,

  ReverseOrder: styled.div`
    margin-left: 236px;

    :where(.css-dev-only-do-not-override-xu9wm8).ant-checkbox + span {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
  `,
};
export default Styled;
