import "./App.css";
import Profile from "./components/socialProfile";
import Statistics from "./components/statistics";
import FriendList from "./components/friendlist";

import user from "./json/user.json";
import statisticalData from "./json/statistical-data.json";
import friends from "./json/friends.json";

console.log(user);

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      {/* <Statistics stats={statisticalData} />; */}
      <FriendList friends={friends} />,
    </div>
  );
}

export default App;
