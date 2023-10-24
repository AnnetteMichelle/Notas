import Menu from "../menu";
import RowNote from "../rowNote";
import Styled from "./styles";
import { notesProps } from "./types";

const Notes = ({ notes }: notesProps) => {
  const matrix = notes.reduce(
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
      {matrix.map((notes) => (
        <RowNote columns={notes}></RowNote>
      ))}
    </Styled.NotesContainer>
  );
};
export default Notes;
