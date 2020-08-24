import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Graph.css";

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 60,
      confirmed: 0,
      active: 0,
      deceased: 0,
      recovered: 0,
    };
  }

  async componentDidMount() {
    let response = await fetch("https://api.covid19india.org/data.json");
    let data = await response.json();
    var statewise = data.statewise[0];
    var confirm = statewise.confirmed;
    this.setState({ confirmed: confirm });
    this.setState({
      active: statewise.active,
      deceased: statewise.deaths,
      recovered: statewise.recovered,
    });

    //console.log(statewise);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <CircularProgressbarWithChildren
              className="mr-t mr-l mr-d position-relative"
              value={this.state.percentage}
              strokeWidth={6}
              counterClockwise={true}
              styles={buildStyles({
                textSize: "20px",
              })}
            >
              {<div>{this.state.confirmed}</div>}
            </CircularProgressbarWithChildren>
          </div>
          <div
            className="col-6"
            style={{ marginLeft: "100px", marginTop: "50px" }}
          >
            <div style={{ color: "blue" }} class="circle row">
              active : {this.state.active}
            </div>
            <div class="circle row">deceased : {this.state.deceased}</div>
            <div style={{ color: "green" }} class="circle row">
              recovered : {this.state.recovered}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
