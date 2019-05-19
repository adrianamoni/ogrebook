import React, { Component } from "react";
import Axios from "axios";
import ProfileList from "./common/profileList";
import Pagination from "./common/pagination";
import { paginate } from "./../utils/paginate";
class Ogres extends Component {
  state = {
    ogres: [],
    currentPage: 1,
    pageSize: 50
  };
  async componentDidMount() {
    const { data: ogresRaw } = await Axios.get(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    );
    const ogres = ogresRaw.Brastlewark;
    this.setState({ ogres });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { pageSize, currentPage, ogres: allOgres } = this.state;

    const ogres = paginate(allOgres, currentPage, pageSize);

    return { totalCount: allOgres.length, data: ogres };
  };

  render() {
    const { pageSize, currentPage } = this.state;

    const { totalCount, data: ogres } = this.getPagedData();
    return (
      <div>
        <div className="jumbotron">
          <h1>Ogres in Brastlewark</h1>
        </div>
        <div className="list-group mb-2">
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
    );
  }
}

export default Ogres;
