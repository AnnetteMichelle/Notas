import { useEffect, useState } from "react";

import { useLocalStorageState } from "ahooks";
import { Button, ColorPicker, Form, Input, message, Tooltip } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import { faNoteSticky, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { noteData } from "../notes/types";
import Styled from "./styles";

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
  const onEditNote = (noteId: string) => {
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

  const onNote = () => {
    navigate("/");
  };

  const onCancelButton = () => {
    navigate("/");
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
      <Styled.Buttons>
        <Button
          icon={<FontAwesomeIcon icon={faNoteSticky} color="#5a9efd" />}
          type="link"
          onClick={onNote}
        >
          Notes
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faXmark} color="#ff4d4f" />}
          type="link"
          danger
          onClick={onCancelButton}
        >
          Cancel
        </Button>
      </Styled.Buttons>
      <Styled.EditContainer>
        <Styled.EditNote $color={color}>
          <Form.Item>
            <Styled.TitleEdit>Edit Note</Styled.TitleEdit>
            <Styled.Titles>Title</Styled.Titles>
            <Styled.Input $color={color}>
              <Input
                showCount
                maxLength={35}
                style={{ width: "310px" }}
                placeholder="Write a title for your note"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></Input>
            </Styled.Input>
            <Styled.Titles>Text</Styled.Titles>
            <Styled.Input $color={color}>
              <TextArea
                rows={4}
                style={{ width: "310px" }}
                placeholder="Write a text for your note"
                autoSize={{ minRows: 3, maxRows: 5 }}
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
              <Button type="primary" onClick={() => onEditNote(noteId || "")}>
                Save
              </Button>
            </Styled.button>
          </Form.Item>
        </Styled.EditNote>
      </Styled.EditContainer>
    </>
  );
};

export default EditNote;
