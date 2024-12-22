import HeroBg from "../components/heroBg/HeroBg";
import img from "../assets/apropos-bg.png"
import Dropdown from "../components/dropdown/Dropdown";
import { aboutList } from "../assets/aboutList";

const APropos = () => {
  console.log(aboutList);
  
  return (
    <>
      <HeroBg text="" img={img} />
      <section className="a-proposSection">
        {aboutList.map((item) => (
          <Dropdown title={item.title} content={item.content} key={aboutList.indexOf(item)+item.title} />
        ))}
      </section>
    </>
  );
};

export default APropos;

