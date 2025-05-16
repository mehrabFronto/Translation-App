import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
