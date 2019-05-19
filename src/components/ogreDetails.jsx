import React, { Component } from "react";
class OgreDetails extends Component {
  render() {
    const { data } = this.props.location.state;
    const style = {
      width: "200px",
      height: "200px",
      objectFit: "cover",
      marginRight: "20px"
    };
    return (
      <div>
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
            <div className="card-body">
              <h5 className="card-title">Special Skills</h5>
              <h5>
                {data.professions.map(profession => (
                  <span class="badge badge-pill badge-success ml-3">
                    {profession}
                  </span>
                ))}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OgreDetails;
