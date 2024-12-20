import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/kasa-logo.svg"
import style from "../header/header.module.css";

const Header = () => {
  return (
    <header>
      <Link to="/home" className={style.logo}>K<Logo />sa</Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" id="homeLink"  className={({ isActive }) => isActive ? style.active : ""}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/a-propos" id="aproposLink" className={({ isActive }) => isActive ? style.active : ""}>A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;