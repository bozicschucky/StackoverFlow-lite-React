import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./style.scss";
import App from "./Components/App";

	ReactDOM.render(
			<App />,
      document.getElementById("root")
      );
