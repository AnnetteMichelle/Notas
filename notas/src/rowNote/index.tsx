import { Col, Row } from "antd";

import ThumbnailNote from "../thumbnailNote";
import type { RowNoteProps } from "./types";

const RowNotes = ({ columns, onDelete }: RowNoteProps) => {
  return (
    <>
      <Row>
        {columns.map((note) => (
          <Col xs={24} sm={24} md={12} lg={12} xl={6} key={note.id}>
            <ThumbnailNote note={note} onDelete={onDelete}></ThumbnailNote>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default RowNotes;
