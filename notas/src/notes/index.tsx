import { useState } from "react";

import { useLocalStorageState } from "ahooks";
import { message } from "antd";
import { orderBy } from "lodash";

import Menu from "../menu";
import { noteData } from "../notes/types";
import RowNote from "../rowNote";
import Styled from "./styles";

const Notes = () => {
  const [notes, setNotes] = useLocalStorageState<noteData[]>(
    "use-local-storage-state-demo1"
  );

  const [sortBy, setSortBy] = useState<"title" | "text" | "dateToCreate">(
    "title"
  );
  const [order, setOrder] = useState<"desc" | "asc">("asc");

  const onSortingChange = ({
    selectedSortBy,
    selectedOrder,
  }: {
    selectedSortBy: "title" | "text" | "dateToCreate";
    selectedOrder: "desc" | "asc";
  }) => {
    setSortBy(selectedSortBy);
    setOrder(selectedOrder);
    setNotes(orderBy(notes, [sortBy], [order]));
  };

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
      <Menu onOrderAsc={onSortingChange}></Menu>
      {matrix?.map((notes) => (
        <RowNote columns={notes} onDelete={onDeleteNote}></RowNote>
      ))}
    </Styled.NotesContainer>
  );
};
export default Notes;
