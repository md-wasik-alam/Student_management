// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import InputForm from './components/InputForm'
// import Table from './components/Table'
import Table2 from './components/Table2'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <>
  <Header/>
  <div className="flex mt-10">
    <div className="w-1/3">
      
      <InputForm/>
    </div>
    <div className="w-2/3">
      <Table2/>
    </div>
  </div>
  </>
  )
}

export default App
