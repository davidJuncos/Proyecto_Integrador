// src/components/ProductList.jsx
function ProductList({ props }) {
  if (props.length === 0) {
    return <div>No se encontraron productos</div>;
  }

  return (
    <ul>
      {props.map((p) => (
        <li key={p.id}>
          {p.title} - ${p.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
