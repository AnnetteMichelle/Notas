import { Col, Row } from "antd";

import ThumbnailNote from "../thumbnailNote";
import type { RowNoteProps } from "./types";

const RowNotes = ({ columns }: RowNoteProps) => {
  return (
    <>
      <Row>
        {columns.map((notes) => (
          <Col xs={24} sm={24} md={12} lg={12} xl={6} key={notes.id}>
            <ThumbnailNote notes={notes}></ThumbnailNote>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default RowNotes;
