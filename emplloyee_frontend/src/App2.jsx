import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update2 from './components/Update2'
import AddData2 from './components/AddData2'
import EmployeeCard from './components/EmployeeCard'


const App2 = () => {
  return (
    <>
        <BrowserRouter>
<Routes>
    <Route path= "/EmployeeCard" element={ <EmployeeCard />} />
    <Route path= "/AddData2" element={ <AddData2 />} />
    <Route path= "/Update2/:id" element={ <Update2 />} />
    
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App2






