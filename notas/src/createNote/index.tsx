import { useParams } from "react-router-dom";

import Menu from "../menu";

const CreateNote = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Menu />
      <h1>Create a new note</h1>
    </>
  );
};
export default CreateNote;
