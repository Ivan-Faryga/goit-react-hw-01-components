import React from "react";
import PropTypes from "prop-types";

// {
//   name, tag, location, avatar, followers, views, likes;
// }

export default function Profile({ name, avatar, tag, location, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={name} className="avatar" width="200" />
        <p className="name">{name}</p>
        <p className="tag">nickname: {tag}</p>
        <p className="location">lives in: {location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

// Profile.PropTypes = {
//   name: propTypes.string,
//   location: propTypes.string,
// };
