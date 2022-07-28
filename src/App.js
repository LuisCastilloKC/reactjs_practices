import FilterData from './components/FilterData/FilterData';
import Api from './components/practices/Api'
import ButtonGroup from './components/practices/Button';
import Counter from './components/practices/Counter';
import Text from './components/practices/InputForm'
import Input2 from './components/practices/inputForm2';
import Form from './components/practices/passingDataFromChildToParent/Form';

function App() {

    const getData = (data) =>{
      console.log("Data coming from Child to Parent", data)
    }

  return (
    <div className="App">
      <Api />
      <ButtonGroup buttons={["One", "Two", "Three", "Four"]} />
      <Text />
      <Counter />
      <Input2 />
      <div>
        <h1>Child To Parent</h1>
        <Form onSubmit={getData} />
      </div>
      <div>
        <h1> Filter </h1>
        <FilterData />
      </div>

    </div>
  );
}

export default App;
