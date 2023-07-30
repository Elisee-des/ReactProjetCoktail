import "@/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "@/pages/Public/PublicRouter";
import AdminRouter from "@/pages/Admin/AdminRouter";
import AuthRouter from "@/pages/Auth/AuthRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
