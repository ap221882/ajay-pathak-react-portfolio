import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import local modules
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Services from "./pages/ServicesPage/Services";
import WorkPage from "./pages/WorkPage/WorkPage";

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
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
