import React from "react";
import "./StateWise.css";

export default class StateWise extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    let response = await fetch("https://api.covid19india.org/data.json");
    let data = await response.json();
    var statewise = data.statewise;
    this.setState({ data: statewise });
    console.log(statewise);
  }

  render() {
    var data = this.state.data;
    return (
      <div className="rounded-lg table-wrapper-scroll-y my-custom-scrollbar">
        <table className="table table-bordered table-striped mb-0">
          <thead>
            <tr>
              <th scope="col">STATE/UT</th>
              <th scope="col">CONFIRMED</th>
              <th scope="col">ACTIVE</th>
              <th scope="col">RECOVERED</th>
              <th scope="col">DECEASED</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element) => (
              <tr>
                <td>{element.state}</td>
                <td>{element.confirmed}</td>
                <td>{element.active}</td>
                <td>{element.recovered}</td>
                <td>{element.deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
