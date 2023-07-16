import "./App.css";
import Alert from "./components/Alert";
//import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"
    }
  };

  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("limeGreen");
      document.body.style.backgroundColor = "#ebebe0";
      showAlert("LimeGreen mode has been enabled!");
    }
  };

  return (
    <>
      <NavBar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode = {toggleMode}
        
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter text to analyze"
          mode={mode}
        />
        {/* <About/>   */}
      </div>
    </>
  );
}

export default App;
