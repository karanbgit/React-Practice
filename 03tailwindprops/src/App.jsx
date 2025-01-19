import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"Karan",
    age:24
  }

  let arr=[1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 mb-4 rounded-xl'>Tailwind Test</h1>

      <Card username="Karan" btnText="Click Me"/>
      <Card username="Dhiraj" />

    </>
  )
}

export default App
