import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./componets/reduxtoolkit/store.js";
// import store from "./componets/redux/store.js";

createRoot(document.getElementById("root")).render(
  <>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
     <Provider store={store}>
      <App />
    </Provider>
  </>,
);
