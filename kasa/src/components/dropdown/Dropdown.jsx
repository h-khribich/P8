import style from "../dropdown/dropdown.module.css";

const Dropdown = ({ description, text }) => {
  const open = () => document.getElementById("myDropdown").classList.toggle(style.open);

  return (
    <div className={style.dropdown}>
      <button onClick={open} className={style.dropbtn}>
        <span>{description}</span>
        <span>icon</span>
      </button>
      <div id="myDropdown" className={style.dropdownContent}>
        <ul>
          <li>{text}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;