import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update3 from './components/Update3'
import Employee from './components/Employee'
import TurnoverCard from './components/TurnoverCard'
import AddDataCard from './components/AddDataCard'
// import EmployeReport from './components/EmployeReport'


const App3 = () => {
  return (
    <>
        <BrowserRouter>
<Routes>
    <Route path= "/" element={ <Employee />} />
    <Route path= "/AddDataCard" element={ <AddDataCard />} />
    <Route path= "/Update3/:id" element={ <Update3 />} />
    <Route path= "/TurnoverCard" element={<TurnoverCard />} />
    {/* <Route path= "/EmployeReport" element={<EmployeReport />} /> */}
    
    
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App3