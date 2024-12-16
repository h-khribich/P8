import HeroBg from "../components/heroBg/HeroBg";
import Gallery from "../components/gallery/Gallery";
import img from "../assets/home-bg.png"

const Home = () => {
  return (
    <>
      <HeroBg text={"Chez vous, partout et ailleurs"} img={img} />
      <Gallery />
    </>
  );
};

export default Home;

