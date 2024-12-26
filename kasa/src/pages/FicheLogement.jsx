import { Navigate, useParams } from "react-router-dom";
import { useProperties } from "../components/customHooks/propertiesProvider";

const FicheLogement = () => {
  const properties = useProperties();
  const { id } = useParams();

  if (!properties || properties.length === 0) {
    return <p>Chargement...</p>;
  }
  
  const property = properties.find((p) => p.id === id);

  if(!property) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div>
      <h1>{property.title}</h1>
      <img src={property.cover} alt={property.title} />
      <p>{property.description}</p>
    </div>
  );
};

export default FicheLogement;

