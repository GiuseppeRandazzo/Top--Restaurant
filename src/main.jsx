import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// StrictMode è un componente di React che ci aiuta a trovare gli errori nell'applicazione. Non è obbligatorio usarlo, ma è una buona pratica metterlo all'inizio dell'applicazione per essere sicuri che tutto funzioni correttamente. Che comprende l'elemento 'App' che abbiamo importato da App.jsx che è il componente principale della nostra applicazione.
// Con "createRoot" diciamo a React creami la Root dell'app e poi con il metodo render gli diciamo cosa deve renderizzare in quella root. Dentro la root ci mettiamo il nostro componente App che è il componente principale della nostra applicazione.
// Con React dunque non si lavora con dell'html puro bensì è tutto javascript.
