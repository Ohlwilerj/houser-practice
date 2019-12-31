import React, { Component } from "react";
// import { async } from "q";
import axios from "axios";
import { Link } from "react-router-dom";
import House from "../House/House";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houseList: []
    };
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount() {
    this.getHouses();
  }

  async getHouses() {
    let res = await axios.get("/api/house");
    this.setState({
      houseList: res.data
    });
  }

  async deleteHouse(id) {
    await axios.delete(`/api/house/${id}`);
    this.getHouses();
  }

  render() {
    let houseList = this.state.houseList.map(el => {
      return (
        <div className="houses" key={el.id}>
          <House
            house={el}
            id={el.property_id}
            name={el.name}
            address={el.address}
            city={el.city}
            state={el.state}
            zip={el.zip}
            img={el.img}
            monthlyMortgage={el.mortgage}
            monthlyRent={el.rent}
            deleteHouse={this.deleteHouse}
          />
        </div>
      );
    });
    return (
      <div className="dashboard-wrapper">
        <div className="dashboard">
          <div className="dashboard-header">
            {/* <p>Dashboard</p> */}
            <Link to="/wizard/StepOne">
              <button className="add-new-property">Add New Property</button>
            </Link>
          </div>
          <h4>House Listings</h4>
          <main>{houseList}</main>
        </div>
      </div>
    );
  }
}
