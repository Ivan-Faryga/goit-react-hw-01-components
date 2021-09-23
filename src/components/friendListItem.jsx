import { func } from "prop-types";

export default function friendListItem({ avatar, name, status }) {
  return (
    <>
      <span className="status">{status}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
}
