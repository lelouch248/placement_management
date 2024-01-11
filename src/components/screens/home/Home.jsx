import Header from "./Header";
import NavigationBar from "./NavigationBar";
import "./styles/home.css";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <NavigationBar />
      <p>placement statistics</p>
    </div>
  );
};
export default Home;
