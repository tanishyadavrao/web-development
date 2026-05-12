import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import { useState } from "react";

function App() {
  const [value1, setvalue] = useState(0);
  return (
    <>
      <div className="value1">{value1}</div>
      <button onClick={()=>{ setvalue(value1+1) }}>click me</button>
        <div className="conatiner">
        hello
        <Navbar />
        <Footer />
      </div>
    </>
  );
}
export default App;
