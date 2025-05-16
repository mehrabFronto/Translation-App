import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
