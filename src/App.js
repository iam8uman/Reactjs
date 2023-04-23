import "./App.css";
import Carousel from "./components/Carousel";
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar title="Kalika ManvGyan" about='About Us'/>
      {/* <Navbar/> */}
      <Carousel img1='./Carousel1.jpg' img2='../public/Carousel2.jpg' img3='../public/Carousel3.jpg'/>
    </>
  );
}

export default App;
