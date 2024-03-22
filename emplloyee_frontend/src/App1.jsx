import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update1 from './components/Update1'
import AddData1 from './components/AddData1'
import EmployeReport from './components/EmployeReport'



const App = () => {
  return (
    <>
        <BrowserRouter>
<Routes>
    <Route path= "/" element={ <EmployeReport />} />
    <Route path= "/AddData1" element={ <AddData1 />} />
    <Route path= "/Update1/:id" element={ <Update1 />} />
    
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App






