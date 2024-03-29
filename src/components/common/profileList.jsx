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
      </div>
      <ul className="list-group list-group-horizontal">
        {data.hair_color === "Pink" || data.hair_color === "Red" ? (
          <li className="list-group-item list-group-item-info mr-2">
            Female Ogre
          </li>
        ) : (
          <li className="list-group-item list-group-item-info mr-2">Male</li>
        )}
        {data.professions.length > 2 ? (
          <li className="list-group-item list-group-item-success mr-2">
            Works a lot
          </li>
        ) : data.professions.length === 0 ? (
          <li className="list-group-item list-group-item-danger mr-2">
            Unemployed :C
          </li>
        ) : (
          <li className="list-group-item list-group-item-secondary mr-2">
            Lazy but get things done
          </li>
        )}
        {data.friends.length > 1 ? (
          <li className="list-group-item list-group-item-success">
            Friendly Ogre
          </li>
        ) : data.friends.length === 0 ? (
          <li className="list-group-item list-group-item-danger">
            Sociopath Ogre
          </li>
        ) : (
          <li className="list-group-item list-group-item-secondary">
            Has few friends
          </li>
        )}
      </ul>
    </Link>
  );
};

export default ProfileList;
