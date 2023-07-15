import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About TextUtils" />
      <div className="container">
        {/* <TextForm heading="Enter text to analyze"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
