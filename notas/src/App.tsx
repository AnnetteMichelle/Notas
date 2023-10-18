import { Route, Routes } from "react-router-dom";

import CreateNote from "./createNote";
import EditNote from "./editNote";
import Notes from "./notes";

function App() {
  const notes = [
    {
      id: 1,
      title: "champagne problems",
      text: "champagne problems you booked the night train for a reason, so you could sit there in this hurt, bustling crowds or silent sleepers, you're not sure which is worse",
      color: "#E6E6FA",
      dateToCreate: "dd/mm/aaaa",
    },
    {
      id: 2,
      title: "champagne problems 2",
      text: "Because I dropped your hand while dancing, Left you out there standing, Crestfallen on the landing, Champagne problems",
      color: "#FFF0F5",
      dateToCreate: "dd/mm/aaaa",
    },
    {
      id: 3,
      title: "champagne problems 3",
      text: "Your mom's ring in your pocket, My picture in your wallet, Your heart was glass, I dropped it, Champagne problems",
      color: "#FFE4E1",
      dateToCreate: "dd/mm/aaaa",
    },
    {
      id: 4,
      title: "champagne problems 4",
      text: "You told your family for a reason, You couldn't keep it in, Your sister splashed out on the bottle, Now no one's celebrating",
      color: "#FFC0CB",
      dateToCreate: "dd/mm/aaaa",
    },
    {
      id: 5,
      title: "champagne problems 5",
      text: "You told your family for a reason, You couldn't keep it in, Your sister splashed out on the bottle, Now no one's celebrating",
      color: "#c6e8fc",
      dateToCreate: "dd/mm/aaaa",
    },
  ];

  return (
    <main>
      <Routes>
        <Route path="/" element={<Notes notes={notes} />} />
        <Route path="/editNote/:noteId" element={<EditNote />} />
        <Route path="createNote/" element={<CreateNote />} />
      </Routes>
    </main>
  );
}

export default App;
