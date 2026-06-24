import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Add from "./Component/Add";
import Edit from "./Component/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}

export default App;