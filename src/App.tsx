import { Jumbotron } from 'reactstrap';
import ClickPage from './ClickPage';

const App = () => {
  return (
    <div className="App">
      <Jumbotron>
        <h1 className="display-3">Click That Emoji</h1>
      </Jumbotron>
      <ClickPage team="🚀" />
    </div>
  );
}

export default App;
