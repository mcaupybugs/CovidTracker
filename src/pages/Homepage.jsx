import React from "react";
import "./Homepage.css";
import Graph from "../components/Graph";
import StateWise from "../components/StateWise";
import IndiaMap from "../components/IndiaMap";

var tracker = require("../assets/tracker.png");

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="float-left header row">
          <img width="100" src={tracker}></img>
          <h2 style={{ marginLeft: "20px" }}>INDIA COVID-19 Tracker</h2>
          <p>
            Let's all pray to make out Earth Covid-19 free soon. Stay Safe and
            do TheLocate
          </p>
        </div>
        <div>
          <div
            style={{ marginLeft: "20px" }}
            className="card w-50 col rounded-50"
          >
            <Graph></Graph>
          </div>
          <div
            style={{ marginLeft: "20px", marginTop: "30px" }}
            className="card w-50 col rounded-50"
          >
            <StateWise></StateWise>
          </div>
        </div>
        <div className="col float-right header">
          <IndiaMap></IndiaMap>
        </div>
      </div>
    );
  }
}
