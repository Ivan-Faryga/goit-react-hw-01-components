import React from "react";
import PropTypes from "prop-types";

// {
//   name, tag, location, avatar, followers, views, likes;
// }

const Profile = (props) => {
  console.log(props);
  return (
    <div className="profile">
      <div className="description">
        <img
          src={props.avpropsatar}
          alt={props.name}
          className="avatar"
          width="480"
        />
        <p className="name">{props.name}</p>
        <p className="tag">{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{props.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{props.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
