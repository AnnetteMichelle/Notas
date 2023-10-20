import { Route, Routes } from "react-router-dom";

import CreateNote from "./createNote";
import EditNote from "./editNote";
import Notes from "./notes";

function App() {
  const notes = [
    {
      id: 1,
      title: "Champagne Problems",
      text: "champagne problems you booked the night train for a reason, so you could sit there in this hurt, bustling crowds or silent sleepers, you're not sure which is worse",
      color: "#FFEBCD",
      dateToCreate: "dd/mm/aaaa",
    },
    {
      id: 2,
      title: "Style",
      text: "Midnight, you come and pick me up, no headlights, a long drive, could end in burning flames or paradise",
      color: "#c6e3fc",
      dateToCreate: "dd/mm/aaaa",
    },
    {
      id: 3,
      title: "Cruel Summer",
      text: "Fever dream high in the quiet of the night, You know that I caught it (oh, yeah, you're right, I want it)",
      color: "#fad2e0",
      dateToCreate: "dd/mm/aaaa",
    },
    {
      id: 4,
      title: "The 1",
      text: "I'm doing good, I'm on some new shit, Been saying yes instead of no, I thought I saw you at the bus stop, I didn't though",
      color: "#ebebfd",
      dateToCreate: "dd/mm/aaaa",
    },
    {
      id: 5,
      title: "Tolerate It",
      text: "I sit and watch you reading with your head low, i wake and watch you breathing with your eyes closed",
      color: "#FAEBD7",
      dateToCreate: "dd/mm/aaaa",
    },
    {
      id: 6,
      title: "Blanck Space",
      text: "Nice to meet you, where you been?, I could show you incredible things, Magic, madness, heaven, sin",
      color: "#bcdce7",
      dateToCreate: "dd/mm/aaaa",
    },
    {
      id: 7,
      title: "The Man",
      text: "I would be complex, I would be cool, They'd say I played the field before I found someone to commit to",
      color: "#FFB6C1",
      dateToCreate: "dd/mm/aaaa",
    },
    {
      id: 8,
      title: "Betty",
      text: "Betty, I won't make assumptions, About why you switched your homeroom but, I think it's 'cause of me",
      color: "#DCDCDC",
      dateToCreate: "dd/mm/aaaa",
    },
  ];

  return (
    <main>
      <Routes>
        <Route path="/" element={<Notes notes={notes} />} />
        <Route path="/editNote/:noteId" element={<EditNote />} />
        <Route path="/createNote" element={<CreateNote />} />
      </Routes>
    </main>
  );
}

export default App;
