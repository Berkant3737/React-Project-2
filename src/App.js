import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";
import Featuredproducts from "./Products/featured products/Featuredproducts";
import products from "./products.json";
import bestsellers from "./bestsellers.json";
import BestSellers from "./Products/BestSellers/BestSellers";
import Footer from "./Footer/Footer";

function App() {
  const [number,setNumber] = useState(0)
  
  return (
    <div>
      
      <Navbar/>
      <Slider/>
      <Featuredproducts products={products} number={number} Setnumber={setNumber} />
      <BestSellers products={bestsellers}/>
      <Footer/>
    </div>
  );
}

export default App;
