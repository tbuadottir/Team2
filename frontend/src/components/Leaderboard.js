import React from 'react';
import Table from 'react-bootstrap/Table';

const LeaderboardPage = () => {
  return (
    <div className="page-container">
      <h1>Leaderboard</h1>
      <p>Refresh the page to update the leaderboard.</p>
      <div className="leaderboard">
        <Table striped size="md">
            <thead>
                <tr>
                <th>#</th>
                <th>Team</th>
                <th>Clue</th>
                <th>Time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Team 1</td>
                <td>5</td>
                <td>16:04 April 4</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Team 5</td>
                <td>3</td>
                <td>17:43 April 4</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Team 2</td>
                <td>2</td>
                <td>08:31 April 5</td>
                </tr>
            </tbody>
        </Table>
      </div>
    </div>
  );
};

export default LeaderboardPage;