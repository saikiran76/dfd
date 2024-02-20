import React from "react";
import ReactDOM from "react-dom/client";
import { TableauEmbed } from "./src/components/Tableau";

export default function App() {
return (
  <div className="App">
   <h1 className="head">Analysis of Airbnb data</h1>
   <TableauEmbed/>
  </div>
);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);