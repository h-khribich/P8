import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
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

      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;
