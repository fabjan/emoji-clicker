import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Leaderboard from './Leaderboard';
import SelectTeam from './SelectTeam';
import ClickEmoji from './ClickEmoji';

const queryClient = new QueryClient({});

const App = () => {

  const [team, setTeam] = useState("")

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div style={{ padding: "1em" }}>
          <ClickEmoji team={team} />
          <SelectTeam team={team} setTeam={t => setTeam(t || "")} />
          <Leaderboard />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
