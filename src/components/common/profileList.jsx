import React from "react";
const ProfileList = ({ data }) => {
  const style = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginRight: "20px"
  };
  return (
    <a href="#" className="list-group-item list-group-item-action">
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
    </a>
  );
};

export default ProfileList;
