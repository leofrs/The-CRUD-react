import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="form" element={<Form />} />
      </Route>
    </Routes>
  );
}

export default App;
