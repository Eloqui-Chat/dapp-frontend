import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { About, Chats, Contact, Home } from "./Pages";
import { useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {!pathname.includes("chat") && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chats/*" element={<Chats />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
};

export default App;
