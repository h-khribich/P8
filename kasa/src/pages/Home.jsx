import HeroBg from "../components/heroBg/HeroBg";
import Gallery from "../components/gallery/Gallery";
import img from "../assets/home-bg.png"
import { useProperties } from "../components/customHooks/propertiesProvider";

const Home = () => {
  const properties = useProperties();

  return (
    <>
      <HeroBg text={"Chez vous, partout et ailleurs"} img={img} />
      <Gallery properties={properties} />
    </>
  );
};

export default Home;

