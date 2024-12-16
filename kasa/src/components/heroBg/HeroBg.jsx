import style from "../heroBg/heroBg.module.css";

const HeroBg = ({ text, img }) => {
  const bgImgStyle = `
  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${img}') center / cover no-repeat
  `
  
  return (
    <div className={style.heroBgWrapper} style={{background: bgImgStyle}}>
      <h1 className={style.heroBgDescription}>{text}</h1>
    </div>
  );
};

export default HeroBg;