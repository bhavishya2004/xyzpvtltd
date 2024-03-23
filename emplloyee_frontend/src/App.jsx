import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './components/Update'
import AddData from './components/AddData'
import Employee from './components/Employee'
import Aboutus from './components/Aboutus'
import Product from './components/Product'
import Contacts from './components/Contacts'
import Turnoverreport from './components/Turnoverreport'
import Report from './components/Report'
// import EmployeReport from './components/EmployeReport'


const App = () => {
  return (
    <>
        <BrowserRouter>
<Routes>
    <Route path= "/" element={ <Employee />} />
    <Route path= "/AddData" element={ <AddData />} />
    <Route path= "/Update/:id" element={ <Update />} />
    <Route path= "/Aboutus" element={ <Aboutus />} />
    <Route path= "/Product" element={ <Product />} />
    <Route path= "/Contacts" element={ <Contacts />} />
    <Route path= "/Turnoverreport" element={<Turnoverreport />} />
    <Route path= "/Report" element={<Report />} />
    
    
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App