// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/TextForm.js";
import Alert from "./Components/Alert.js";
import About from "./Components/About.js";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#33324e";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
    }
  };
  const toggleRedMode = () => {
    if (mode === "light") {
      setMode("danger");
      document.body.style.backgroundColor = "#e8c3c3";
      document.body.style.color = "black";
      showAlert("Red Mode Enabled", "success");
      document.title = "TextUtils - Red Theme";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
    }
  };
  
  return (
    <>
    <Navbar
      title="TextUtils"
      mode={mode}
      toggleDarkMode={toggleDarkMode}
      toggleRedMode={toggleRedMode}
    />
    <Alert alert={alert} />
    <TextForm
      heading="Enter text to be analysed"
      mode={mode}
      toggleDarkMode={toggleDarkMode}
      toggleRedMode={toggleRedMode}
      showAlert={showAlert}
    />
    <About />
  </>
  )
}

export default App;
