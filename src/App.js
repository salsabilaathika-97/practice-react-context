import './App.css';
import Card from './component/Card';
import { useState } from "react";
import { mainContext } from "./context/mainContext"

function App() {
  const [data, setData] = useState({
    name: "Salsa",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  })

  const mainContextValue = {
    data
  }

  return (
    <div className="App">
      <mainContext.Provider value = {mainContextValue}>
      <Card />
      </mainContext.Provider>
    </div>
  );
}

export default App;
