import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import CharacterFeed from './Pages/CharacterFeed'
import GameFeed from './Pages/GameFeed'
import Game from './Pages/Game'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/userProfile/:id" element={<Profile />} />
        <Route path="/characterFeed" element={<CharacterFeed />} />
        <Route path="/gameFeed" element={<GameFeed />} />
        <Route path="/post/:id" element={<Game /> } />
      </Routes>
    </div>
  );
}

export default App;
