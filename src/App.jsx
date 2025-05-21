import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen flex items-center justify-center'>
        <h1 className='text-3-l font-bold'>hello world</h1>
      </div>
    </>
  )
}

export default App
