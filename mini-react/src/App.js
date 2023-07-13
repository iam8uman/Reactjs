import "./App.css";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Navbar from './components/Navbar'
import Textarea from "./components/Textarea";

function App() {
  return (
    <>
    {/* This might be the blunder her  */}
      <Navbar title="Kalika ManvGyan" about='About Us'/>
      {/* <Navbar/> */}
      <Carousel img1='./Carousel1.jpg' img2='../public/Carousel2.jpg' img3='../public/Carousel3.jpg'/>

      <Textarea topic='Type anything to Convert...'/>

      <About/>
    </>
  );
}

export default App;
