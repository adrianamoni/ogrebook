import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
class OgreDetails extends Component {
  state = {
    hasUpdated: false
  };
  friendsStateUpdate() {
    const { data } = this.props.location.state;
    const friendsNames = data.friends;
    const friendsId = this.state.ogres.filter(o =>
      friendsNames.includes(o.name)
    );
    this.setState({ friendsId, hasUpdated: true });
  }
  async componentDidMount() {
    const { data: ogresRaw } = await Axios.get(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    );
    const ogres = ogresRaw.Brastlewark;
    this.setState({ ogres });
    this.friendsStateUpdate();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.location.state.data.id !== this.props.location.state.data.id
    ) {
      this.friendsStateUpdate();
    }
  }
  render() {
    const { data } = this.props.location.state;
    const style = {
      width: "200px",
      height: "200px",
      objectFit: "cover",
      marginRight: "20px"
    };
    return (
      <div className="container mb-3">
        <div className="jumbotron">
          <img
            src={data.thumbnail}
            style={style}
            className="rounded mx-auto d-block"
            alt="..."
          />
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{data.name}</h4>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Age</th>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>Hair Color</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.age}</td>
                  <td>{data.height}</td>
                  <td>{data.weight}</td>
                  <td>{data.hair_color}</td>
                </tr>
                <tr />
              </tbody>
            </table>
          </div>
          <div className="card w-100">
            <div className="card-header">Professions</div>
            <div className="card-body">
              <h5>
                {data.professions.map(profession => (
                  <span className="badge badge-pill badge-success ml-3">
                    {profession}
                  </span>
                ))}
              </h5>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Friends with</div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {this.state.hasUpdated && this.state.friendsId.length !== 0 ? (
                  this.state.friendsId.map(friend => (
                    <li className="list-group-item">
                      <Link
                        to={{
                          pathname: `/ogres/${friend.id}`,
                          state: {
                            data: friend
                          }
                        }}
                      >
                        {friend.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item">No friends registered :c</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OgreDetails;
