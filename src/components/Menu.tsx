import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <ul className="site-menu js-clone-nav d-none d-lg-block">
      <li className={splitLocation[1] === "" ? "active" : ""}>
        <Link to="/">Home</Link>
      </li>
      <li className={splitLocation[1] === "gallery" ? "active" : ""}>
        <Link to="/gallery">Galeria</Link>
      </li>
      <li className={splitLocation[1] === "contact" ? "active" : ""}>
        <Link to="/contact">Kontakt</Link>
      </li>
    </ul>
  );
};

export default Menu;
