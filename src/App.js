import './App.css';
import Display from './components/display/Display';
import FormWithReducer from './components/form-with-reducer/FormWithReducer';
import FormWithState from './components/form-with-state/FormWithState';
import Form from './components/form/Form';
import LifeCycle from './components/lifecycle/LifeCycle';
import Summary from './components/summary/Summary';

function App() {
  return (
    <div className="App">
      {/* Calculator */}
      {/* <Form/>
      <FormWithState/> */}
      {/* <FormWithReducer/> */}
      <Summary/>
    </div>
  );
}

export default App;
