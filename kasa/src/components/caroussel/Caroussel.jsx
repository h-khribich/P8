import style from "../caroussel/caroussel.module.css";
import arrowBack from "../../assets/arrow_back.png"
import arrowForward from "../../assets/arrow_forward.png"
import { useState } from "react";

const Caroussel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const carousselNavigation = (e) => {
    e.target.id === "arrowForward" 
    ? setIndex((currentIndex) => (currentIndex + 1) % pictures.length)
    : setIndex((currentIndex) => (currentIndex - 1 + pictures.length) % pictures.length)
  } 

  return (
    <div className={style.caroussel}>
      <img src={pictures[index]} className={style.carousselBackgroundImg} />
      {
      pictures.length > 1 && <div className={style.carousselNavigationArrows}>
        <img src={arrowBack} id="arrowBack" onClick={(e) => carousselNavigation(e)} />
        <img src={arrowForward} id="arrowForward" onClick={(e) => carousselNavigation(e)} />
      </div>
      }
      {pictures.length > 1 && <p className={style.carousselPagination}>{`${index + 1}/${pictures.length}`}</p> }
    </div>
  );
};

export default Caroussel;