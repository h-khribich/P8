import style from "../thumbnail/thumbnail.module.css";
import { Link } from "react-router-dom"

const Thumbnail = ({ property }) => {
  return (
    <div className={style.thumbnail}>
      <img src={property.cover} className={style.thumbnailCover} />
      <Link className={style.link} to={"/fiche-logement/" + property.id}>{property.title}</Link>
    </div>
  );
};

export default Thumbnail;