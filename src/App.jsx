import "@tremor/react/dist/esm/tremor.css";
import "./App.css";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="scroll-smooth select-none">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
