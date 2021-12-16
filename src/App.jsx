import "./App.css";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import { useGetCoinsQuery } from "./features/cryptoApi";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
