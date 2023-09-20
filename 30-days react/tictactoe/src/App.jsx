import "./App.css";
import ktakti from './assets/ktakti.jpg'

const User = {
  name: "SumanDai",
  age: 23,
  imgUrl: ktakti,
};

function App() {
  return (
    <>
    <h2>Ramra Ktakti</h2>
      <img src={User.imgUrl} className="avatar" alt="" />
    <footer>Hii k xa tmro halkhabar {'My name is '+ User.name}</footer>
    </>
  );
}

export default App;
