import Api from './components/practices/Api'
import ButtonGroup from './components/practices/Button';
import Form from './components/practices/Forms';

function App() {
  return (
    <div className="App">
      <Api />
      <ButtonGroup buttons={["One", "Two", "Three", "Four"]} />
      <Form />
    </div>
  );
}

export default App;
