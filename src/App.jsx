import { useState , useEffect} from 'react'

import './App.css'
import { Input } from './components/ui/input'
import { NavBar } from './components/ui/NavBar'
import { CardDemo } from './components/ui/cardDemo'
import RecipePage from './components/ui/RecipePage'

import { RecoilRoot, useRecoilState, useRecoilValueLoadable } from 'recoil'
import { itemsState } from './context/atom'
import { CardComponent } from './components/ui/cardComponent'
import { InputComponent } from './components/ui/inputComponent'
import { SkeletonComponent } from './components/ui/skeletonComponent'
// import { ErrorBoundary } from './components/ui/ErrorBoundary'

function App() {

  const item = {
    id : 12345,
    image : "www.google.com",
    title : "Hi pilla"
  }

  return (

    <div>
        <NavBar></NavBar>
        <RecoilRoot>
          <InputComponent></InputComponent>
          <CardComponent></CardComponent>
        </RecoilRoot>

        {/* <SkeletonComponent></SkeletonComponent> */}
        {/* <CardDemo item={item}></CardDemo> */}

        <RecipePage></RecipePage>
        
    </div>
    
    
  )
}



export default App
