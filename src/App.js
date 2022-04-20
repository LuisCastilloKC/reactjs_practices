import Api from './components/practices/Api'
import ButtonGroup from './components/practices/Button';
import Counter from './components/practices/Counter';
import Form from './components/practices/Forms';

function App() {
  return (
    <div className="App">
      <Api />
      <ButtonGroup buttons={["One", "Two", "Three", "Four"]} />
      <Form />
      <Counter />
    </div>
  );
}

export default App;
