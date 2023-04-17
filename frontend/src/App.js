import React from 'react';
import InfoPage from './components/InfoPage';
import LeaderboardPage from './components/Leaderboard';
import RandomPage from './components/RandomPage';
import RandomPageone from './components/RandomPageone';
import RandomPagetwo from './components/RandomPagetwo';
import ErrorPage from './components/ErrorPage';
import logo from './logo.png';


function App() {
  const showInfoPage = window.location.pathname === '/';
  const showLeaderboardPage = window.location.pathname === '/leaderboard';
  const showRandomPage = window.location.pathname === '/random';
  const showRandomPageone = window.location.pathname === '/randomone';
  const showRandomPagetwo = window.location.pathname === '/randomtwo';


  return (
    <div>
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="/">Info</a>
            </li>
            <li>
              <a href="/leaderboard">Leaderboard</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        {showInfoPage && <InfoPage />}
        {showLeaderboardPage && <LeaderboardPage />}
        {showRandomPage && <RandomPage />}
        {showRandomPageone && <RandomPageone />}
        {showRandomPagetwo && <RandomPagetwo />}


        {!showInfoPage && !showLeaderboardPage && !showRandomPage && !showRandomPageone && !showRandomPagetwo && <ErrorPage />}
      </div>
    </div>
  );
}

export default App;
