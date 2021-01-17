import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import SampleContainer from './containers/SampleContainer';

function App() {
  return (
    <div>
      <CounterContainer/>
      <hr/>
      <TodosContainer/>
      <hr/>
      <SampleContainer/>
    </div>
  );
}

export default App;
