function StatsPanel(props) {
  return (
    <div>
      <h2>Estadisticas</h2>
      <p>Productos totales: {props.Total} productos</p>
      {/*<p>            Productos con título mayor a 20 caracteres: {props.CantProd20 }          </p>{" "}*/}
      {/*<p>Promedio de descuento: {props.PromDisc.toFixed(2)}%</p>*/}
      {/* NUEVO */}
      <p>Precio máximo: {props.max}</p>
      <p>Precio mínimo: {props.mint}</p>
      {/*<p>Precio total de productos filtrados: ${props.totalPrice.toFixed(2)}</p>*/}
    </div>
  );
}
export default StatsPanel;
