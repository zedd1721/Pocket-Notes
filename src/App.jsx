import "./App.css";
import Mainleft from "./components/Mainleft";
import Mainright from "./components/Mainright";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handlemodal = () => {
    setShowModal(true);
  };
  return (
    <main>
      <Mainleft clickAdd={handlemodal} />
      <Mainright />
      {showModal && <Modal modalClose={() => setShowModal(false)} />}
    </main>
  );
}

export default App;
