import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Vuelos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Hoteles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Paquetes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Cruceros</a>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
}

export default NavBar;
