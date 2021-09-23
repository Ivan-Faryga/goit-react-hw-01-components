import friendListItem from "./friendListItem";

export default function FriendList(friends) {
  return (
    <ul class="friend-list">
      (
      {friends.map((friend) => (
        <li class="item" key={friend.id}>
          {
            <friendListItem
              avatar={friend.avatar}
              name={friend.name}
              status={friend.isOnline}
            />
          }
        </li>
      ))}
      )
    </ul>
  );
}
