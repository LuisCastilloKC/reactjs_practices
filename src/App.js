import Api from './components/practices/Api'
import ButtonGroup from './components/practices/Button';

function App() {
  return (
    <div className="App">
      <Api />
      <ButtonGroup buttons={["One", "Two", "Three", "Four"]} />
    </div>
  );
}

export default App;
