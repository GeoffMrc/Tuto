import './App.css';
import { Title } from './components/Title';
import { List } from './components/List';

const App = () => (
  <div className="App">
    <Title name={'Arthur'} />
    <List />
  </div>
);

export default App;
