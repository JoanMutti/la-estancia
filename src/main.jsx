import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";
import { ProductListContextProvider } from "./context/ProductListContext";

ReactDOM.render(
  <ProductListContextProvider>
    <AppContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppContextProvider>
  </ProductListContextProvider>,
  document.getElementById("root")
);
