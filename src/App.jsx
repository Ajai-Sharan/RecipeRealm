import { useState } from 'react'
import './App.css'
import { Input } from './components/ui/input'
import { NavBar } from './components/ui/NavBar'

function App() {
  

  return (

    <div>
        <NavBar></NavBar>
        <div className=' flex justify-center p-5'>
          <Input type="text" placeholder="Recipie" />
      </div>
    </div>
    
    
  )
}



export default App
