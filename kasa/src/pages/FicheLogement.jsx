import { Navigate, useParams } from "react-router-dom";
import { useProperties } from "../components/customHooks/propertiesProvider";
import Caroussel from "../components/caroussel/Caroussel";
import Dropdown from "../components/dropdown/Dropdown"
import starActive from "../assets/star-active.png"
import starInactive from "../assets/star-inactive.png"

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

  const calculateRating = ( num ) => {
    const list = [];

    for(let i = 1; i <= 5; i++) {
      i >= Number(num)
      ? list.push(<li key={i}><img src={starActive} /></li>)
      : list.push(<li key={i}><img src={starInactive} /></li>)
    }

    return list.reverse();
  }

  return (
    <section className="section-ficheLogement">
      <Caroussel pictures={property.pictures} />
      <div className="property">
        <div>
          <h2 className="title">{property.title}</h2>
          <p className="location">{property.location}</p>
          <ul className="tagList">
            {property.tags.map((tag) => {
              return <li className="tag" key={tag}>{tag}</li>
            })}
          </ul>
        </div>
        <div className="hostAndRating">
            <div className="host">
              <p>{property.host.name}</p>
              <img src={property.host.picture} />
            </div>
            <ul className="ratingList">
              {
                calculateRating(property.rating)
              }
            </ul>
        </div>
      </div>
      <div className="dropdowns">
        <Dropdown title={"Description"} content={property.description} className="propertyDropdown" />
        <Dropdown title={"Équipements"} content={property.equipments} className="propertyDropdown" />
      </div>
    </section>
  );
};

export default FicheLogement;

