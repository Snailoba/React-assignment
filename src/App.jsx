import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import FavoriteSites from "./components/FavoriteSites";

function App() {
  return (
    <div className = "app">
      <div className = "favSite">
        <FavoriteSites />
      </div>
      <div className = "profile">
        <Profile />
      </div>
      <div className = "gallery">
        <Gallery />
      </div>
    </div>
  )
}

export default App
