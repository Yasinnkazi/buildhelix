import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import SchemaMarkup from "./components/seo/SchemaMarkup";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <SchemaMarkup />
      <App />
    </>
  </StrictMode>
);
