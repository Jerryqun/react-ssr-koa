import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { Provider } from "react-redux";
import createStore from "./redux/store/create";
import { createRoot } from "react-dom/client";

const defaultStore = window.__STORE__ || {};
const store = createStore(defaultStore);

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);
