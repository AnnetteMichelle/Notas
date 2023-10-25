import { useLocalStorageState } from "ahooks";
import { message } from "antd";

import Menu from "../menu";
import { noteData } from "../notes/types";
import RowNote from "../rowNote";
import Styled from "./styles";

const Notes = () => {
  const [notes, setNotes] = useLocalStorageState<noteData[]>(
    "use-local-storage-state-demo1"
  );
  const onDeleteNote = (id: string) => {
    setNotes(notes?.filter((a) => a.id !== id));
    return message.success("Note removed");
  };
  const matrix = notes?.reduce(
    (
      accumulator: {
        id: string;
        title: string;
        text: string;
        color: string;
        dateToCreate: string;
      }[][],
      currentElement,
      index
    ) => {
      const currentGroupIndex = Math.floor(index / 4);

      if (!accumulator[currentGroupIndex]) {
        accumulator[currentGroupIndex] = [];
      }

      accumulator[currentGroupIndex].push(currentElement);

      return accumulator;
    },
    []
  );

  return (
    <Styled.NotesContainer>
      <Menu></Menu>
      {matrix?.map((notes) => (
        <RowNote columns={notes} onDelete={onDeleteNote}></RowNote>
      ))}
    </Styled.NotesContainer>
  );
};
export default Notes;
