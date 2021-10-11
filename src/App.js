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
  const [filteredName, setFilteredName] = useState("All");


  //Filter products by name
  const filteredProducts = () => {
    if(filteredName === "All") {
      return phones;
    } else {
      return phones.filter(item => item.title === filteredName);
    }
  }

  //Array for printing
  const products = filteredProducts();
  
  //Initial printing products after refreshing the page
  const printProducts = useCallback(  () => {
    if(sortOrder === "DESC") {
      setPhones(data.sort((a, b) => b.price - a.price));
    } else {
      setPhones(data.sort((a, b) => a.price - b.price));
    }
  }, [sortOrder])

  useEffect(() => {
    printProducts();
  }, [printProducts, filteredName])

  const totalPriceRef = useRef();
  const totalProductRef = useRef();


  //Function that calculate total price off all products
  const printTotalPrice = () => {
    let newPrice = 0;
    products.map((item) => {
      return (newPrice += item.price * item.quantity);
    });
    setTotalPrice(newPrice);
  };

  //Function that calculate total number of products
  const printTotalProducts = () => {
    let numProducts = 0;
    products.map((item) => {
      return (numProducts += item.quantity);
    });
    setTotalProducts(numProducts);
  };

  totalPriceRef.current = printTotalPrice;
  totalProductRef.current = printTotalProducts;

  useEffect(() => {
    totalPriceRef.current();
    totalProductRef.current();
  }, [phones, filteredName]);

  //Function that remove product on the button "remove"
  const removeItem = (id) => {
    const deleted = phones.filter((item) => item.id !== id);
    setPhones(deleted);
  };

  //Function that increase quantity of products
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

  //Function that decrease quantity of products
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
      <Navbar totalProducts={totalProducts} setSortOrder={setSortOrder} setFilteredName={setFilteredName}/>
      <CartContainer
        products={products}
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
