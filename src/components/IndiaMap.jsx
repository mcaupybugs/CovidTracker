import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const INDIA_TOPO_JSON = require("./india.topo.json");

// url to a valid topojson file

export default class IndiaMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  async componentDidMount() {
    let response = await fetch(
      "https://api.covid19india.org/states_daily.json"
    );
    let data = await response.json();
    console.log(data.states_daily[0]);
    this.setState({ data: data.states_daily[0] });

    //console.log(statewise);
  }
  render() {
    var PROJECTION_CONFIG = {
      scale: 350,
      center: [78.9629, 22.5937],
    };
    var data = this.state.data;
    return (
      <div>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={600}
          height={220}
          data-tip=""
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo) => {
                for (const [key, value] of Object.entries(data)) {
                  const current = key.toUpperCase();
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      //fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                      // style={geographyStyle}
                      // onMouseEnter={onMouseEnter(geo, current)}
                      // onMouseLeave={onMouseLeave}
                    />
                  );
                }
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    );
  }
}
