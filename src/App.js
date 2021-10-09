import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Sum from "./components/Sum";
import Footer from "./components/Footer";
import { data } from "./data";

function App() {

  const [phones, setPhones] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [sortOrder, setSortOrder] = useState("ASC");

  const printProducts = useCallback(  () => {
    if(sortOrder === "ASC") {
      setPhones(data.sort((a, b) => b.price - a.price));
    } else {
      setPhones(data.sort((a, b) => a.price - b.price));
    }
  }, [sortOrder])

  useEffect(() => {
    printProducts();
  }, [printProducts])

  const totalPriceRef = useRef();
  const totalProductRef = useRef();

  const printTotalPrice = () => {
    let newPrice = 0;
    phones.map((item) => {
      return (newPrice += item.price * item.quantity);
    });
    setTotalPrice(newPrice);
  };

  const printTotalProducts = () => {
    let numProducts = 0;
    phones.map((item) => {
      return (numProducts += item.quantity);
    });
    setTotalProducts(numProducts);
  };

  totalPriceRef.current = printTotalPrice;
  totalProductRef.current = printTotalProducts;

  useEffect(() => {
    totalPriceRef.current();
    totalProductRef.current();
  }, [phones]);

  const removeItem = (id) => {
    const deleted = phones.filter((item) => item.id !== id);
    setPhones(deleted);
  };

  const increaseQuantity = (id) => {
    let increased = phones.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity === 10 ? 10 : item.quantity + 1,
        };
      }
      return item;
    });
    setPhones(increased);
  };

  const decreaseQuantity = (id) => {
    let decreased = phones.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity === 1 ? 1 : item.quantity - 1,
        };
      }
      return item;
    });
    setPhones(decreased);
  };

  return (
    <div className="App">
      <Navbar totalProducts={totalProducts} setSortOrder={setSortOrder}/>
      <CartContainer
        phones={phones}
        removeItem={removeItem}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        printProducts={printProducts}
      />
      <Sum
        totalPrice={totalPrice}
        setPhones={setPhones}
        totalProducts={totalProducts}
      />
      <Footer />
    </div>
  );
}

export default App;
