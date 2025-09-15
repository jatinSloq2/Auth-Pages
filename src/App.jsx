import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Routes>
      {/* Auth Pages Only */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
