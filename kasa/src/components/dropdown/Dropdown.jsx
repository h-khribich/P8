import { useState } from "react";
import style from "../dropdown/dropdown.module.css";
import icon from "../../assets/arrow-icon.png";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openOrClose = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false); 
        setIsClosing(false); 
      }, 400);
    } else {
      setIsOpen(true);
    }
  };

  const displayList = (el) => {
    return el instanceof Array
    ? el.map((item) => <li key={item}>{item}</li>)
    : <li>{el}</li>
  }
  
  return (
    <div className={style.dropdown}>
      <div className={style.dropbtn}>
        <span>{title}</span>
        <button onClick={openOrClose} className={style.dropIcon}>
        <img
            src={icon}
            alt="Arrow Icon"
            className={`${style.arrowIcon} ${
              isOpen && !isClosing ? style.rotateBegin : style.rotateEnd
            }`}
          />
        </button>
      </div>
      <div
        className={`${style.dropdownContent} ${
          isOpen
            ? isClosing
              ? style.close
              : style.open
            : isClosing
            ? style.close
            : ""
        }`}
        style={{ display: isOpen || isClosing ? "block" : "none" }}
      >
        <ul>{displayList(content)}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
