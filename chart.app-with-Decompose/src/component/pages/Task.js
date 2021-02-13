import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import Chart from '../Utlis/Chart'
export default class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartvalue: []
    };
  }
  componentDidMount = async () => {
    let Api = await Chart();
    this.setState({ loading: false, chartvalue: Api });
    console.log(this.state.chartvalue);
  };
  render() {
    console.log(this.state.chartvalue)
    console.log(this.state.chartvalue.data)
    return (
      <div>
        <LineChart
          width={730}
          height={250}
          data={this.state.chartvalue.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis padding={{ left: 20 }} domain={[0, 50]} />
          <YAxis type="number" domain={[25, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="data_error" stroke="#8884d8" />
       
          <Line type="monotone" dataKey="input-data" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}
