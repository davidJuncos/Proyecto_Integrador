function StatsPanel(props) {
  return (
    <div>
      <h2>Estadisticas</h2>
      <p>Productos totales: {props.Total} productos</p>
      <p>
        Productos con título mayor a 20 caracteres: {props.CantProdTit}{" "}
      </p>{" "}
      <p>Promedio de descuento: {props.PromDisc}%</p>
      {/* NUEVO */}
      <p>Precio máximo: {props.max}</p>
      <p>Precio mínimo: {props.min}</p>
      <p>Precio total de productos filtrados: ${props.totalPrice}</p>
    </div>
  );
}
export default StatsPanel;
