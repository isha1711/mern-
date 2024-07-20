import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import SearchPage from "./component/SearchPage";



function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
