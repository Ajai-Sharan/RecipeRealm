
import RecipePage from './components/ui/RecipePage'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home'
import { RecoilRoot } from 'recoil'



function App() {

  return (

    <div>

      <RecoilRoot>
        <BrowserRouter>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<RecipePage />} />

          </Routes>

        </BrowserRouter>

      </RecoilRoot>

    </div>


  )
}



export default App
