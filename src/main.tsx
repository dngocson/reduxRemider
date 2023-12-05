import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchUser } from "./feature/users/userSlice.ts";

store.dispatch(fetchUser());
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
