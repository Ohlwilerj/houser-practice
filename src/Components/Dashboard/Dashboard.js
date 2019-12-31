import React, { Component } from "react";
import { async } from "q";
import axios from "axios";
import { Link } from "react-router-dom";
import House from "../House/House";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houseList: []
    };
  }

  componentDidMount() {
    this.getHouse();
  }

  async deleteHouse(id) {
    await axios.delete(`/api/house/${id}`);
    this.getHouses();
  }

  render() {
    return <div>Dashboard</div>;
  }
}
