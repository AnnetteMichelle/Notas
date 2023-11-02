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
    margin-top: -28px;
    margin-left: 79px;

    :where(.css-dev-only-do-not-override-amq5gd).ant-radio-wrapper
      span.ant-radio
      + * {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
  `,

  Select: styled.div`
    margin-left: 1550px;
    margin-top: -32px;

    :where(.css-dev-only-do-not-override-amq5gd).ant-select:not(
        .ant-select-customize-input
      )
      .ant-select-selector {
      color: #a3a3a3;
      border-radius: 9px;
      border-color: none;
    }
  `,
};
export default Styled;
