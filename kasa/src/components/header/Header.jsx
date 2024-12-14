import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/kasa-logo.svg"
import style from "../header/header.module.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className={style.logo}>K<Logo />sa</Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a-propos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;