import { noteData } from "../notes/types";

export type ThumbnailNote = {
  note: noteData;
  onDelete: (id: string) => void;
};
