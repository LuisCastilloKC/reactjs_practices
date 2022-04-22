import Api from './components/practices/Api'
import ButtonGroup from './components/practices/Button';
import Counter from './components/practices/Counter';
import Form from './components/practices/Forms';
import Text from './components/practices/InputForm'
import Input2 from './components/practices/inputForm2';

function App() {
  return (
    <div className="App">
      <Api />
      <ButtonGroup buttons={["One", "Two", "Three", "Four"]} />
      <Text />
      <Form />
      <Counter />
      <Input2 />
    </div>
  );
}

export default App;
