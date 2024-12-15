import style from "../thumbnail/thumbnail.module.css";
import { Link } from "react-router-dom"

const Thumbnail = () => {
  return (
    <div className={style.thumbnail}>
      <Link className={style.link} to="/">Titre de la location</Link>
    </div>
  );
};

export default Thumbnail;