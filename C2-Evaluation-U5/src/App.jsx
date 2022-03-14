import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [showdata, setshowdata] = useState(true);

  return (
    <div className="App">
      {showdata ? <Rentals /> : <AddHouse />}
      <button
        className="toggleForm"
        onClick={() => {
          setshowdata(showdata ? false : true);
        }}
      >
        {/* Show text Add House or Show Rentals based on state */}
        {showdata ? "Add House" : "Show Rentals"}

        <br />
        <br />
      </button>
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
