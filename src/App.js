import {useState} from "react";
import { useGlobalContext } from "./context";
import './App.css';
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { data } from './data';


function App() {

  const [phones, setPhones] = useState(data);
  //console.log(phones)
 

  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
