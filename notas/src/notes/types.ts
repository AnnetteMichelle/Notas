export type notesProps = {
  notes: noteData[];
};
export type noteData = {
  id: number;
  title: string;
  text: string;
  color: string;
  dateToCreate: string;
};
