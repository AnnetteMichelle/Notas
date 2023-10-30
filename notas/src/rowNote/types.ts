import { noteData } from "../notes/types";

export type RowNoteProps = {
  columns: noteData[];
  onDelete: (id: string) => void;
};
