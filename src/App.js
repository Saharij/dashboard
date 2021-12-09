import './App.css';
import { Submitted } from './components/Submitted/Submitted';
import { InProgress } from './components/InProgress/InProgress';
import { ReadyToRelease } from './components/ReadyToRelease/ReadyToRelease';

function App() {
  return (
    <div className="App">
      <InProgress />
      <Submitted />
      <ReadyToRelease />
    </div>
  );
}

export default App;
