export type notesProps = {
  notes: noteData[];
};
export type noteData = {
  id: string;
  title: string;
  text: string;
  color: string;
  dateToCreate: string;
};
