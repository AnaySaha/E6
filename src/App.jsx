import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './components/watch/Watch'

function App() {

  const [watches, setWatches] = useState([]);

  useEffect( () =>{
    fetch('watches.json')
    .then(res=> res.json())
    .then(data => setWatches(data));
  }, [])
  // const watches = [
  //   {id: 1, name: 'Apple Watch', price: 200},
  //   {id: 2, name: 'Samsung Watch', price: 150},
  //   {id: 3, name: 'Mi Watch', price: 100},
  // ]

  return (
    <>
    
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
