import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./componentes/Error/Error";
import Home from "./componentes/Home/Home";
import Landing from "./componentes/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
