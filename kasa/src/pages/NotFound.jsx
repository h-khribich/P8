import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound-section">
      <h1 className="notFound-title">404</h1>
      <p className="notFound-description">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="notFound-link" to="/home">Retourner sur la page d'accueil</Link>
    </section>
  );
};

export default NotFound;

