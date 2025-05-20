// src/components/ProductList.jsx
function ProductList({ products }) {
  if (products.length === 0) {
    return <div>No se encontraron productos</div>;
  }

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.title} - ${p.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
