import {
  Button,
  Tooltip,
} from 'antd';
import { useNavigate } from 'react-router-dom';

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Styled from './styles';
import type { ThumbnailNote } from './types';

const ThumbnailNote = ({ notes }: ThumbnailNote) => {
  const navigate = useNavigate();
  const onEditClick = () => {
    navigate("/editNote/" + notes.id);
  };

  return (
    <>
      <Styled.Note $color={notes.color}>
        <Styled.Color $color={notes.color}>
          <Styled.Title>{notes.title}</Styled.Title>

          <Styled.Description>{notes.text}</Styled.Description>
        </Styled.Color>
        <Styled.Date>{notes.dateToCreate}</Styled.Date>
      </Styled.Note>
      <Styled.Buttons>
        <Tooltip title="Edit note" color="#108ee9">
          <Button
            type="text"
            icon={<FontAwesomeIcon icon={faPenToSquare} color="#8bcafd" />}
            onClick={onEditClick}
          ></Button>
        </Tooltip>

        <Tooltip title="Delete note" color="red">
          <Button
            danger
            type="text"
            icon={<FontAwesomeIcon icon={faTrash} color="#c7c7c7" />}
          ></Button>
        </Tooltip>
      </Styled.Buttons>
    </>
  );
};

export default ThumbnailNote;
