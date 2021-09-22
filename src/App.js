import "./App.css";
import Profile from "./components/socialProfile";
import user from "./user.json";

console.log(user);

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}

export default App;
