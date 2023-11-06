import { useId, useState } from "react";

import { useLocalStorageState } from "ahooks";
import {
  Button,
  ColorPicker,
  Form,
  Input,
  message,
  Space,
  Tooltip,
} from "antd";
import { Link, useNavigate } from "react-router-dom";

import { faNoteSticky, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { noteData } from "../notes/types";
import Styled from "./styles";

const CreateNote = () => {
  const [text, setText] = useState("");
  const [textArea, setTextArea] = useState("");
  const [color, setColor] = useState<string>("#FFF");
  const { TextArea } = Input;

  const [notes, setNote] = useLocalStorageState<noteData[]>(
    "use-local-storage-state-demo1"
  );
  const navigate = useNavigate();
  const id = useId();
  const OnSaveNote = () => {
    const note: noteData = {
      title: text,
      text: textArea,
      color,
      id,
      dateToCreate: new Date().toLocaleDateString(),
    };
    setText("");
    setTextArea("");
    setColor("");
    setNote([...(notes || []), note]);
    navigate("/");
    message.success("Created note ");
  };

  return (
    <>
      <Styled.Buttons>
        <Button
          icon={<FontAwesomeIcon icon={faNoteSticky} color="#5a9efd" />}
          type="link"
        >
          <Link to="/">Notes</Link>
        </Button>

        <Button
          icon={<FontAwesomeIcon icon={faXmark} color="#ff4d4f" />}
          type="link"
          danger
        >
          <Link to="/">Cancel</Link>
        </Button>
      </Styled.Buttons>

      <Styled.CreateContainer>
        <Styled.CreateNote $color={color}>
          <Form.Item>
            <Styled.TitleNote>Create a new note</Styled.TitleNote>

            <Styled.Titles>Title</Styled.Titles>

            <Space.Compact>
              <Styled.Input $color={color}>
                <Input
                  style={{ width: "310px" }}
                  placeholder="Write a title for your note"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></Input>
              </Styled.Input>
            </Space.Compact>

            <Styled.Titles>Text</Styled.Titles>
            <Styled.Input $color={color}>
              <TextArea
                rows={4}
                style={{ width: "310px" }}
                placeholder="Write a text for your note"
                autoSize={{ minRows: 2, maxRows: 6 }}
                value={textArea}
                onChange={(e) => setTextArea(e.target.value)}
              />
            </Styled.Input>
            <Styled.Titles>Note colors</Styled.Titles>
            <Styled.ColorPicker>
              <Tooltip
                title="select a color for the note"
                placement="topLeft"
                color="#967957"
              >
                <ColorPicker
                  value={color}
                  onChangeComplete={(color) => {
                    setColor(color?.toHexString());
                  }}
                />
              </Tooltip>
            </Styled.ColorPicker>
            <Styled.Titles>
              Date
              <Styled.Date>
                {new Date().toLocaleDateString("en-ES", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </Styled.Date>
            </Styled.Titles>
            <Styled.button>
              {" "}
              <Button type="primary" onClick={OnSaveNote}>
                Save the note
              </Button>
            </Styled.button>
          </Form.Item>
        </Styled.CreateNote>
      </Styled.CreateContainer>
    </>
  );
};
export default CreateNote;
