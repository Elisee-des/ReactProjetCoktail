import "@/App.css";
import { BrowserRouter } from "react-router-dom";
import PublicRouter from "@/pages/PublicLayout/PublicRouter";

function App() {
  return (
    <BrowserRouter>
      <PublicRouter />
    </BrowserRouter>
  );
}

export default App;
