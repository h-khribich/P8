import style from "../dropdown/dropdown.module.css";
import icon from "../../assets/arrow-icon.png";
import { useState } from "react";

const Dropdown = ({ description, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openOrClose = (e) => {
    if (isOpen) {
      e.target.parentElement.parentElement.nextElementSibling.classList.add(style.close);
      setTimeout(() => {
        setIsOpen(false); 
      }, 300);
    } else {
      setIsOpen(true); 
    }
  };

  return (
    <div className={style.dropdown}>
      <div className={style.dropbtn}>
        <span>{description}</span>
        <button onClick={(e) => openOrClose(e)} className={style.dropIcon}>
          <img
            src={icon}
            alt="Arrow Icon"
            className={`${style.arrowIcon} ${isOpen ? style.rotateBegin : style.rotateEnd}`} 
          />
        </button>
      </div>
      <div
        className={`${style.dropdownContent} ${isOpen ? style.open : style.close}`}
      >
        <ul>
          <li>{text}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
