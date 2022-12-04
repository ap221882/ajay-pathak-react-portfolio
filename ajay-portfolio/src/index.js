import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

//import local modules
import App from "./App";
import GlobalStyle from "./globalStyles";
import {
  Navbar,
  Homepage,
  AboutPage,
  Services,
  WorkPage,
  Footer,
} from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App>
      <GlobalStyle />
      <Navbar />
      <Homepage />
      <AboutPage />
      <Services />
      <WorkPage />
      <Footer />
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
