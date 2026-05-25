import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import SchemaMarkup from "./components/seo/SchemaMarkup";
import { initGA, initClarity } from "./utils/analytics";
import "./styles/index.css";

function Root() {
  useEffect(() => {
    initGA();
    initClarity();
  }, []);

  return (
    <>
      <SchemaMarkup />
      <App />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
