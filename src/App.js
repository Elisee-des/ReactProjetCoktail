import "@/App.css";
import Home from "@/pages/Home";
import Service from "@/pages/Service";
import Contact from "@/pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "@/_utlis/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
