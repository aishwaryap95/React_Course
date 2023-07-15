import "./App.css";
//import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <NavBar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
        <TextForm heading="Enter text to analyze" mode={mode} />
        {/* <About/>   */}
      </div>
    </>
  );
}

export default App;
