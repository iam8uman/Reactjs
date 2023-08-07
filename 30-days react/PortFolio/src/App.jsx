import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

export default function App() {
  const [selectedpage, setSelectedpage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <div className="app bg-deep-blue">
      <Navbar />
    </div>
  );
}
