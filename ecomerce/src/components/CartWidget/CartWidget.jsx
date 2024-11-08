import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="carrito">
      <a href="#"><img src="./img/carrito-de-compras.png" alt="icono de seleccion"/></a>
      <p>Productos cargados <span className="badge bg-secondary">1</span></p>
      
    </div>
  );
}

export default CartWidget;