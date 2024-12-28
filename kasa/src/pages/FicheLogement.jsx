import { Navigate, useParams } from "react-router-dom";
import { useProperties } from "../components/customHooks/propertiesProvider";
import Caroussel from "../components/caroussel/Caroussel";

const FicheLogement = () => {
  const properties = useProperties();
  const { id } = useParams();

  if (!properties || properties.length === 0) {
    return <p>Chargement...</p>;
  }
  
  const property = properties.find((p) => p.id === id);
  console.log(property);
  

  if(!property) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <section className="section-ficheLogement">
      <Caroussel pictures={property.pictures} />
    </section>
  );
};

export default FicheLogement;

