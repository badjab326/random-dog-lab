import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Form from './components/Form';
import DogDisplay from './components/DogDisplay';

function App() {

  const [ doggo, setDoggo ] = useState(null);

  const getDoggo = async () => {
    const response = await fetch(
      'https://dog.ceo/api/breeds/image/random'
    )
    const data = await response.json()

    setDoggo(data)

  };

  return (
    <div className="App">
      <h1>Random Dog Photo Generator</h1>
      <Form dogGenerate={getDoggo} />
      <DogDisplay dog={doggo} />
    </div>
  );
}

export default App;