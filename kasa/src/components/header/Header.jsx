import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Kasa</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fiche-logement">Fiche logement</Link>
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