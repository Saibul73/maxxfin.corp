import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing"
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

const App = () => {
  return <div> 
    <Navbar/>
    <Landing/>
    <Cards/>
    <Cards/>
    <About/>
    <Footer/>
  </div>;
};

export default App;
