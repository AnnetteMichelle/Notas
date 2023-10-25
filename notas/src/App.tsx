import { useEffect } from "react";

import { useLocalStorageState } from "ahooks";
import { Route, Routes } from "react-router-dom";

import CreateNote from "./createNote";
import EditNote from "./editNote";
import Notes from "./notes";
import { noteData } from "./notes/types";

function App() {
  const [notes] = useLocalStorageState<noteData[]>(
    "use-local-storage-state-demo1",
    {
      defaultValue: [
        {
          id: "1",
          title: "Champagne Problems",
          text: "champagne problems you booked the night train for a reason, so you could sit there in this hurt, bustling crowds or silent sleepers, you're not sure which is worse",
          color: "#FFEBCD",
          dateToCreate: "dd/mm/aaaa",
        },
      ],
    }
  );

  useEffect(() => {
    notes;
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/editNote/:noteId" element={<EditNote />} />
        <Route path="/createNote" element={<CreateNote />} />
      </Routes>
    </main>
  );
}

export default App;
