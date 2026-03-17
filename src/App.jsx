import { useState } from "react";
import Cube from "./ThreeJsSetup/Cube";
import TexturedCube from "./ThreeJsSetup/TexturedCube";

function App() {
const [view, setView] = useState("cube");

  return (
 <div style={{ textAlign: "center" }}>
      
  <h2>Name: Tooba Shafiq | Seat No: B23110006173</h2>
      <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setView("cube")}>
       Simple Cube
      </button>
      <button onClick={() => setView("textured")}>
      Textured Cube
      </button>
      </div>
      {view === "cube" && <Cube />}
      {view === "textured" && <TexturedCube />}

    </div>
  );
}

export default App;