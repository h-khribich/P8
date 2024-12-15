import { useEffect, useState } from "react";
import style from "../gallery/gallery.module.css";
import Thumbnail from "../thumbnail/Thumbnail"

const Gallery = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <section className={style.gallery}>
      {properties && properties.length > 0 ? (
        properties.map((property) => (
          <Thumbnail key={property.id} property={property} />
        ))
      ) : (
        <p>Chargement...</p>
      )}
    </section>
  );
};

export default Gallery;