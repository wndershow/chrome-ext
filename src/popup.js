import React from "react";
import ReactDOM from "react-dom";
import PopupMain from "./PopupMain";

const rootEl = document.getElementById("app");

ReactDOM.render(<PopupMain />, rootEl);

if (module.hot) {
  module.hot.accept("./PopupMain", () => {
    const NextApp = require("./PopupMain").default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
