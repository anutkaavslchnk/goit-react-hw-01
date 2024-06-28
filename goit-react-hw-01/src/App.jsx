
import './App.css';
import Profile from './components/Profile/Profile';
import userData from "../src/userData.json";
function App() {
 
  return (
    <>
     <Profile name={userData.username} tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        statsFol={userData.stats.followers}
        statsView={userData.stats.views} statsLikes={userData.stats.likes}>
          

        </Profile>
    </>
  )
}

export default App
