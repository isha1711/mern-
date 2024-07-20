
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoProvider } from "./store/TodoContext";
import { UserProvider } from "./store/UserContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </UserProvider>
  </StrictMode>
);

reportWebVitals();