import { useState , useEffect} from 'react'

import './App.css'
import { Input } from './components/ui/input'
import { NavBar } from './components/ui/NavBar'
import { CardDemo } from './components/ui/cardDemo'
import RecipePage from './components/ui/RecipePage'
import axios from 'axios'


function App() {

  const [items, setItems] = useState([]);
  
  useEffect(() => {
    
    async function main() {
      const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=73832230218b4537839e468fb372faaa")
      setItems(response.data.results)
    }
    
    main();
  }, []);

  return (

    <div>
        <NavBar></NavBar>
        <div className=' flex justify-center py-6 px-5'>
          <Input type="text" placeholder="Recipie" />
        </div>
        <div className='flex flex-wrap px-5 justify-evenly'>
          {
              items.map(item => (
                <CardDemo item={item}></CardDemo>
              ))
          }
        </div>
        
    </div>
    
    
  )
}



export default App
