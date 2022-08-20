import './App.css';
import Card from './component/Card';
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "Salsa",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  })

  return (
    <div className="App">
      <Card data={data}/>
    </div>
  );
}

export default App;
