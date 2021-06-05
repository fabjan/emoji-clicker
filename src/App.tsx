import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router, RouteComponentProps, Link } from "@reach/router"

import Leaderboard from './Leaderboard';
import SelectTeam from './SelectTeam';
import ClickEmoji from './ClickEmoji';

// TODO clean up routing
interface SelectorProps extends RouteComponentProps {
  team: string | null;
  setTeam: (s: string | null) => void;
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

const queryClient = new QueryClient({});

const App = () => {

  const [team, setTeam] = useState("")

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div style={{ padding: "1em" }}>
          <Leaderboard />
          <Router>
            <Selector path="/" team={team} setTeam={t => setTeam(t ? t : "")} />
            <Clicker path="clicker" team={team} />
          </Router>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
