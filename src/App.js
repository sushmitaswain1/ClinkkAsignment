import "./App.scss";
import React from 'react';
import { LeftBar } from "./components/leftBar/LeftBar";
import MiddleBar from "./components/middleBar/MiddleBar";
import RightBar from "./components/RightBar/RightBar";

function App() {
  
  return (
    <div className=" section columns">
      <LeftBar />
      <div className="column"></div>
      <div className=" column is-7 card">
        <MiddleBar/>
      </div>

      <div className=" column is-4 card">
        <RightBar />
      </div>
      <div className="column"></div>
    </div>
  );
}

export default App;
