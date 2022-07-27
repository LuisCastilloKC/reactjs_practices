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
<<<<<<< HEAD
      <Counter />
      <Input2 />
<<<<<<< HEAD
=======
      <Challenge />
>>>>>>> 4211829 (reactjs challange)
=======
      <div>
        <h1>Child To Parent</h1>
        <Form />
      </div>
>>>>>>> 969f4f2 (practice passing data from child to parent)
    </div>
  );
}

export default App;
