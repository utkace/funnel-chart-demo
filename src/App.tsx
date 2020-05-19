import React, { Component } from "react";
import "./assets/css/main.css";
import "./assets/css/theme.css";
import "./App.css";

export default class App extends Component {
  componentDidMount() {
    let graph = new FunnelGraph({
      container: "#funnel",
      gradientDirection: "horizontal",
      data: {
        labels: ["Impressions", "Add To Cart", "Buy"],
        colors: ["orange", "red"],
        values: [12000, 5700, 360],
        gradientDirection: "horizontal",
      },
      displayPercent: true,
      direction: "horizontal",
    });

    graph.draw();
  }

  render() {
    return (
      <div className="App">
        <h1>Funnel Chart Demo</h1>
        <div
          id="funnel"
          style={{
            height: "326.5px",
            width: "640px",
            background: "#393862",
            padding: "20px",
          }}
        ></div>
      </div>
    );
  }
}
