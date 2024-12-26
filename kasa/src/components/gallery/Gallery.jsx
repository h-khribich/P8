import style from "../gallery/gallery.module.css";
import Thumbnail from "../thumbnail/Thumbnail"
import { useProperties } from "../customHooks/propertiesProvider";

const Gallery = () => {
  const properties = useProperties();

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