import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import StatsPanel from "./components/StatsPanel";

//Componentes
//import Card from "./components/Card";
//import Footer from "./components/Footer";
//import Product from "./components/Product";

function App() {
  const [products, setProducta] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // axios.get("https://fakestoreapi.com/products").then((res) => {
    axios.get("https://dummyjson.com/products?limit=100").then((res) => {
      setProducta(res.data.products);
    });
  }, []);

  //Filtramos los productos
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  {
    /* Constantes para estadisticas */
  }
  const totalProducts = filteredProducts.length;

  {
    /* Spread operator*/
  }
  const maxProduct = Math.max(...filteredProducts.map((p) => p.price));
  const minProduct = Math.min(...filteredProducts.map((p) => p.price));
  // const productsLongDesc = filteredProducts.filter((p) => p.title.length > 20);
  //const countLongProduct = productsLongDesc.length;
  //const totalPrice = filteredProducts.reduce((pf, p) => pf + p.price, 0);
  //const PromDisc =    filteredProducts.length > 0      ? filteredProducts.reduce((acc, p) => acc + p.discountPercentage, 0) /        filteredProducts.length      : 0;

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

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.title} {p.price}
          </li>
        ))}
      </ul>

      <button onClick={() => setShow(!show)}>Ocultar </button>

      {show && (
        <StatsPanel
          Total={totalProducts}
          // CantProd20={countLongProduct}
          // PromDisc={PromDisc}
          max={maxProduct}
          min={minProduct}
          // totalPrice={totalPrice}
        />
      )}
      {/*Renderizacion condicional*/}
      {filteredProducts.length === 0 && <div>No se encontraron productos</div>}
    </>
  );
}

export default App;
