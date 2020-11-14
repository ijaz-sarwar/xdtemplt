import React from "react";
import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import Center from "./Center";
import Slidepics from "./Slidepics";
import Centerdown from "./Centerdown";
import Footertop from "./Footertop";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="centerpic">
        {" "}
        <Center />
      </div>
      <div
        style={{
          width: "100%",
          paddingTop: "30px",

          paddingBottom: "30px",
        }}
      >
        <Slidepics />
        <div>
          <Centerdown />
        </div>
      </div>
      <div>
        <Footertop />
      </div>
      <div
        style={{
          backgroundColor: " rgb(228, 46, 46)",
          borderRadius: "40% 40% 0% 2%",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
