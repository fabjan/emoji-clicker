import { useState } from 'react';
import { Table } from 'reactstrap';
import { Router, RouteComponentProps, Link } from "@reach/router"

import SelectTeam from './SelectTeam';
import ClickEmoji from './ClickEmoji';

// TODO clean up routing
interface SelectorProps extends RouteComponentProps {
  team: string | null;
  setTeam: (s: string | null) => void;
}

const HighScores = () => {

  // TODO backend data
  // TODO live updating
  const teamData = {
    "🚀": 4711,
    "🍪": 1337,
    "🥑": 42,
  };

  const tableRows = Object.entries(teamData).map(([team, score]) =>
    <tr>
      <th scope="row">{score}</th>
      <td>{team}</td>
    </tr>
  );

  return (
    <div>
      <h2>High Scores</h2>
      <Table striped>
        <thead>
          <tr>
            <th>Clicks</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    </div>
  )
}


const Selector = (props: SelectorProps) => {
  return (
    <div>
      <nav>
        <Link to="clicker"> ☞ Start clicking</Link>
      </nav>
      <SelectTeam team={props.team} setTeam={props.setTeam} />
    </div>
  )
}

interface ClickerProps extends RouteComponentProps {
  team: string;
}

const Clicker = (props: ClickerProps) => {
  return (
    <div>
      <nav>
        <Link to="/">Back to start</Link>
      </nav>
      <ClickEmoji team={props.team} />
    </div>
  )
}

const App = () => {

  const [team, setTeam] = useState("")

  return (
    <div className="App">
      <div style={{ padding: "1em" }}>
        <HighScores />
        <Router>
          <Selector path="/" team={team} setTeam={t => setTeam(t ? t : "")} />
          <Clicker path="clicker" team={team} />
        </Router>
      </div>
    </div>
  );
}

export default App;
