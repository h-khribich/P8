import style from "../heroBg/heroBg.module.css";

const HeroBg = () => {
  return (
    <div className={style.heroBgWrapper}>
      <h1 className={style.heroBgDescription}>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default HeroBg;