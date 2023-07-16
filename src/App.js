import "./App.css";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
