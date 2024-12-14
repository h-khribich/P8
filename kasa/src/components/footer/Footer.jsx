import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/kasa-logo.svg"
import style from "../footer/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <Link to="/" className={style.logo}>K<Logo />sa</Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
