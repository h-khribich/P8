import style from "../gallery/gallery.module.css";
import Thumbnail from "../thumbnail/Thumbnail"

const Gallery = () => {
  return (
    <section className={style.gallery}>
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </section>
  );
};

export default Gallery;