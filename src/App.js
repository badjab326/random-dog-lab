import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"
import Form from './components/Form'

function App() {

  const [ doggo, setDoggo ] = useState(null);

  const getDoggo = async => {
    const response = await fetch(
      'https://dog.ceo/api/breeds/image/random'
    )
    const data = await response.json()

    setDoggo(data)

  }

  return (
    <div className="App">

    </div>
  );
}

export default App;