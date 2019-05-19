import React from "react";
import { Link } from "react-router-dom";
const ProfileList = ({ data }) => {
  const style = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginRight: "20px"
  };
  return (
    <Link
      to={{
        pathname: `/ogres/${data.id}`,
        state: {
          data: data
        }
      }}
      className="list-group-item list-group-item-action"
    >
      <img
        style={style}
        src={data.thumbnail}
        alt="..."
        className="img-thumbnail float-left"
      />
      <div className="d-flex justify-content-between">
        <h5 className="mb-1">{data.name}</h5>
        <span className="badge badge-pill badge-success">Age: {data.age}</span>
      </div>
      <p className="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit.
      </p>
      <small>Donec id elit non mi porta.</small>
    </Link>
  );
};

export default ProfileList;
