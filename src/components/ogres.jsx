import React, { Component } from "react";
import Axios from "axios";
import ProfileList from "./common/profileList";
import Pagination from "./common/pagination";
import { paginate } from "./../utils/paginate";
class Ogres extends Component {
  state = {
    ogres: [],
    currentPage: 1,
    pageSize: 50,
    maleOgres: 0,
    femaleOgres: 0,
    sortedOgre: ""
  };
  async componentDidMount() {
    const { data: ogresRaw } = await Axios.get(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    );
    const ogres = ogresRaw.Brastlewark;
    this.setState({ ogres });
    const maleOgres = ogres.filter(
      o => o.hair_color !== "Pink" && o.hair_color !== "Red"
    );
    const femaleOgres = ogres.filter(
      o => o.hair_color === "Pink" || o.hair_color === "Red"
    );
    this.setState({ maleOgres, femaleOgres });
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleOgreSelect = () => {
    const sortedMaleOgres = this.state.ogres.filter(
      o => o.hair_color !== "Pink" && o.hair_color !== "Red"
    );
    this.setState({ ogres: sortedMaleOgres, sortedOgre: "maleOgresOnly" });
  };

  getPagedData = () => {
    const { pageSize, currentPage, ogres: allOgres } = this.state;

    const ogres = paginate(allOgres, currentPage, pageSize);

    return { totalCount: allOgres.length, data: ogres };
  };
  resetOgresFilters = () => {
    const resetOgres = this.state.maleOgres.concat(this.state.femaleOgres);
    this.setState({ ogres: resetOgres, sortedOgre: "" });
    console.log("Btn clicked");
  };

  render() {
    const { pageSize, currentPage } = this.state;
    const styleScroll = {
      height: "500px",
      overflowY: "scroll"
    };

    const { totalCount, data: ogres } = this.getPagedData();
    return (
      <div className="mt-3">
        <div className="jumbotron">
          <h1>Ogres in Brastlewark</h1>
        </div>
        <div className="row mb-2">
          <div className="col-4">
            <ul className="list-group">
              <li
                className="list-group-item list-group-item-secondary"
                aria-disabled="true"
              >
                Filter By Genre
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                onClick={this.handleOgreSelect}
              >
                {this.state.sortedOgre === "maleOgresOnly" ? (
                  <strong>Male Ogres</strong>
                ) : (
                  <span>Male Ogres</span>
                )}

                <span className="badge badge-primary badge-pill">
                  {this.state.maleOgres.length}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Female Ogres (Not Working)
                <span className="badge badge-primary badge-pill">
                  {this.state.femaleOgres.length}
                </span>
              </li>
            </ul>
            <ul className="list-group mt-3">
              <li
                className="list-group-item list-group-item-secondary"
                aria-disabled="true"
              >
                Filter By Friendliness
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Very friendly Ogres (Not Working)
                <span className="badge badge-primary badge-pill">
                  Random Number
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Lonely Ogres (Not Working)
                <span className="badge badge-primary badge-pill">
                  Random Number
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block mt-3"
              onClick={this.resetOgresFilters}
            >
              Reset Filters
            </button>
          </div>
          <div className="col-8">
            <h4>Showing {this.state.ogres.length} Ogres in the Database</h4>
            <div className="list-group mb-2" style={styleScroll}>
              {ogres.map(ogre => (
                <ProfileList data={ogre} key={ogre.id} />
              ))}
            </div>
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Ogres;
