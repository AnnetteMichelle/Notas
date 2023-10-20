import { useState } from "react";

import { Button, ColorPicker, Form, Input, Tooltip } from "antd";
import { useParams } from "react-router-dom";

import Menu from "../menu";
import Styled from "./styles";

const CreateNote = () => {
  const [text, setText] = useState("");
  const [textArea, setTextArea] = useState("");
  const [color, setColor] = useState<string>("#FFF");
  const { TextArea } = Input;

  const { id } = useParams();
  console.log(id);

  const OnSaveNote = () => {
    console.log(text);
    console.log(textArea);
    console.log(color);
    setText("");
    setTextArea("");
    setColor("");
  };

  /*const onChangeColor = () => {
    setValue(color);
  };*/

  return (
    <>
      <Menu />
      <Styled.CreateNote $color={color}>
        <Styled.TitleNote>Create a new note</Styled.TitleNote>
        <Form.Item>
          {" "}
          <Styled.Titles>Title</Styled.Titles>
          <Styled.Input $color={color}>
            <Input
              placeholder="Write a title for your note"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></Input>
          </Styled.Input>
          <Styled.Titles>Text</Styled.Titles>
          <Styled.Input $color={color}>
            <TextArea
              placeholder="Write a text for your note"
              autoSize={{ minRows: 2, maxRows: 6 }}
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
            />
          </Styled.Input>
          <Styled.Titles>Note colors</Styled.Titles>
          <Tooltip
            title="select a color for the note"
            placement="topLeft"
            color="#967957"
          >
            <Styled.ColorPicker>
              <ColorPicker
                //onChange={onChangeColor}
                value={color}
                onChangeComplete={(color) => {
                  setColor(color?.toHexString());
                }}
              />
            </Styled.ColorPicker>
          </Tooltip>
          <Styled.Titles>
            Date
            <Styled.Date>
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </Styled.Date>
          </Styled.Titles>
          <Styled.button>
            {" "}
            <Button type="primary" onClick={OnSaveNote}>
              Save a note
            </Button>
          </Styled.button>
        </Form.Item>
      </Styled.CreateNote>
    </>
  );
};
export default CreateNote;
