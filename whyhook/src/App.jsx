function App() {
  let value = 15;

  const addValue = () => {
    value = value + 1;
    console.log("value added "+value);
  }

  const subValue = () => {
    value = value - 1;
    console.log("value sub "+value);
  }
  return (
    <>
      <div className="mainContainer flex text-white flex-col w-80 rounded-md bg-purple-900">
        <h1 className="bg-slate-400 text-3xl">Why Suman Code?</h1>
        <h2 className="value text-blue-200 text-5xl m-2">Values is = {value} </h2>
        <hr />
        <button className="btn outline-dotted outline-green-400 text-2xl m-3 rounded-md" onClick={addValue}>
          Increase
        </button>
        <button className="btn outline-dotted outline-red-400 text-2xl m-4 rounded-md" onClick={subValue}>Decrease</button>
      </div>
    </>
  );
}

export default App;
