import { useParams } from "react-router-dom";

import Menu from "../menu";

const EditNote = () => {
  const { noteId } = useParams();
  console.log(noteId);
  return (
    <>
      <Menu />
      <h1>Edit note </h1>
    </>
  );
};

export default EditNote;
