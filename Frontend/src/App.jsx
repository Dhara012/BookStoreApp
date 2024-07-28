import React from 'react'
import Home from './home/Home'
import{ Route,Routes } from  'react-router-dom'
import Courses from './courses/Courses'
import SignUp from './components/SignUp'


function App() {
  return (<>

{/* <Home/>  
<Course/> */}
<Routes>
  <Route>
    <Route path='/' element={<Home />} />
    <Route path='/course' element={<Courses />} />
    <Route path='/signup' element={<SignUp/>} />
  </Route>
</Routes>
  </>
   
  )
}

export default App
