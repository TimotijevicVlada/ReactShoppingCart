import {useState} from "react";
import { useGlobalContext } from "./context";
import './App.css';
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { data } from './data';


function App() {

  const [phones, setPhones] = useState(data);
  console.log(phones)
 



  return (
    <div className="App">
      <Navbar />
      <CartContainer />
      <div className="phones_wrapper">
        {phones.map(item => (
        <div key={item.id}>
          <img className="images" src={item.img} alt={item.title} />
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default App;
