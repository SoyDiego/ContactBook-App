import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "./styles.scss";
import "animate.css";

ReactDOM.render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>,
	document.getElementById("root")
);
