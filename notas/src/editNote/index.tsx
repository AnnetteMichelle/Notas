import { useEffect, useState } from "react";

import { useLocalStorageState } from "ahooks";
import { Button, ColorPicker, Form, Input, message, Tooltip } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import Styled from "../createNote/styles";
import Menu from "../menu";
import { noteData } from "../notes/types";

const EditNote = () => {
  const { noteId } = useParams();
  console.log(noteId);
  const [text, setText] = useState("");
  const [textArea, setTextArea] = useState("");
  const [color, setColor] = useState<string>("#FFF");
  const { TextArea } = Input;

  const [notes, setNote] = useLocalStorageState<noteData[]>(
    "use-local-storage-state-demo1"
  );

  const navigate = useNavigate();
  const OnEditNote = (noteId: string) => {
    setNote(
      notes?.map((note) => {
        if (note.id == noteId) {
          return {
            ...note,
            title: text,
            text: textArea,
            color,
          };
        }
        return note;
      })
    );
    navigate("/");
    message.success("Edited note ");
  };

  useEffect(() => {
    if (notes) {
      const UpdateNote = notes.find((note) => note.id === noteId);
      setText(UpdateNote?.title || "");
      setTextArea(UpdateNote?.text || "");
      setColor(UpdateNote?.color || "");
    }
  }, [noteId, notes]);

  return (
    <>
      <Menu />
      <Styled.CreateNote $color={color}>
        <Styled.TitleNote>Edit Note</Styled.TitleNote>

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
            <Button type="primary" onClick={() => OnEditNote(noteId || "")}>
              Edit note
            </Button>
          </Styled.button>
        </Form.Item>
      </Styled.CreateNote>
    </>
  );
};

export default EditNote;
