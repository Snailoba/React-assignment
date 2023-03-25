import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import FavoriteSites from "./components/FavoriteSites";
import StateAssignmentOne from "./components/StateAssignmentOne";
import StateAssignmentTwo from "./components/StateAssignmentTwo";

function App() {
  return (
    <div className="app">
      <div className="favSite">
        <FavoriteSites />
      </div>
      <div className="profile">
        <Profile />
      </div>
      <div className="gallery">
        <Gallery />
      </div>
      <div className="stateOne">
        <StateAssignmentOne />
      </div>
      <div className="stateTwo">
        <StateAssignmentTwo />
      </div>
    </div>
  );
}

export default App;
