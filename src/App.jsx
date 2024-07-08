import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import InfoPage from "./Components/InfoPage/InfoPage";
import StudiesPage from "./Components/StudiesPage/StudiesPage";
import CVPage from "./Components/CVPage/CVPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/studies" element={<StudiesPage />} />
        <Route path="/CV" element={<CVPage />} />
      </Routes>
    </>
  );
}

export default App;
