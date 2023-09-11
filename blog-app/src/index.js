import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./components/App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import "./index.css";

const root = createRoot(document.getElementById("root")); // Create a root

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
