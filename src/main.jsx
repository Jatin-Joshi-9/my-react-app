import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
const customElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Jatin</td>
    </tr>

    <tr>
      <td>Pruthviraj</td>
    </tr>
  </table>
);

createRoot(document.getElementById("jj")).render(customElement
);
