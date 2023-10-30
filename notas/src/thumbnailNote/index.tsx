//import {  useState } from "react";
import { Button, Popconfirm, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Styled from "./styles";
import type { ThumbnailNote } from "./types";

const ThumbnailNote = ({ note, onDelete }: ThumbnailNote) => {
  const navigate = useNavigate();
  const onEditClick = () => {
    navigate("/editNote/" + note.id);
  };

  return (
    <>
      <Styled.Note $color={note.color}>
        <Styled.Color $color={note.color}>
          <Styled.Title>{note.title}</Styled.Title>

          <Styled.Description>{note.text}</Styled.Description>
        </Styled.Color>
        <Styled.Date>{note.dateToCreate}</Styled.Date>
      </Styled.Note>
      <Styled.Buttons>
        <Tooltip title="Edit note" color="#108ee9">
          <Button
            type="text"
            icon={<FontAwesomeIcon icon={faPenToSquare} color="#8bcafd" />}
            onClick={onEditClick}
          ></Button>
        </Tooltip>

        <Popconfirm
          title="Delete the note"
          description="Are you sure to delete this note?"
          placement="right"
          onConfirm={() => onDelete(note.id)}
          okText="Delete Note"
          cancelText="Cancel"
        >
          <Button
            danger
            type="text"
            icon={<FontAwesomeIcon icon={faTrash} color="#c7c7c7" />}
          ></Button>
        </Popconfirm>
      </Styled.Buttons>
    </>
  );
};

export default ThumbnailNote;
