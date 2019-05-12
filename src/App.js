import React from "react";
import "./config/ReactotronConfig";

import { Provider } from "react-redux";

import store from "./store/index";

console.tron.log();

const App = () => (
  <Provider store={store}>
    <h1>hello world</h1>
  </Provider>
);

export default App;
