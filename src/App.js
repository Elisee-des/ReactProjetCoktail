import "@/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "@/pages/Public/PublicRouter";
import AdminRouter from "@/pages/Admin/AdminRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
