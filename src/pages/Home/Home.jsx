import Featured from "../../components/Featured/Featured";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
        </div>
    </>
  )
}

export default Home