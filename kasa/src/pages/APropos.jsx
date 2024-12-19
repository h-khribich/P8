import HeroBg from "../components/heroBg/HeroBg";
import img from "../assets/apropos-bg.png"
import Dropdown from "../components/dropdown/Dropdown";

const APropos = () => {
  return (
    <>
      <HeroBg text="" img={img} />
      <Dropdown description={"Titre"} text={"texte"} />
      <Dropdown description={"Titre"} text={"texte"} />
      <Dropdown description={"Titre"} text={"texte"} />
      <Dropdown description={"Titre"} text={"texte"} />
    </>
  );
};

export default APropos;

