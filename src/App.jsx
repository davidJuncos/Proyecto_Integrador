import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import StatsPanel from "./components/StatsPanel";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducta] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100").then((res) => {
      setProducta(res.data.products);
    });
  }, []);
  {
    /*Filtarmos productos */
  }
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalProducts = filteredProducts.length;
  const maxProduct = Math.max(...filteredProducts.map((p) => p.price));
  const minProduct = Math.min(...filteredProducts.map((p) => p.price));
  const productsLongTit = filteredProducts.filter((p) => p.title.length > 20);
  const countLongProduct = productsLongTit.length;
  const totalPrice = filteredProducts.reduce((pf, p) => pf + p.price, 0);
  const PromDisc =
    filteredProducts.length > 0
      ? filteredProducts.reduce((acc, p) => acc + p.discountPercentage, 0) /
        filteredProducts.length
      : 0;

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Axios</h1>

      <input
        type="text"
        placeholder="Buscar Producto"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {/*Usamos componente nuevo*/}
      <ProductList products={filteredProducts} />

      <button onClick={() => setShow(!show)}>Ocultar</button>

      {show && (
        <StatsPanel
          Total={totalProducts}
          CantProdTit={countLongProduct}
          PromDisc={PromDisc.toFixed(2)}
          max={maxProduct}
          min={minProduct}
          totalPrice={totalPrice.toFixed(2)}
        />
      )}
    </>
  );
}

export default App;
