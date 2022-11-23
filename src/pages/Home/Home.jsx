import Featured from "../../components/Featured/Featured";
import FeaturedPropertyList from "../../components/FeaturedPropertyList/FeaturedPropertyList";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
import "./Home.css";

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Home guests love</h1>
          <FeaturedPropertyList />
        </div>
    </>
  )
}

export default Home