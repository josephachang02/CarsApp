import CarsForm from "./components/CarsForm/CarsForm";
import CarList from "./components/CarsList/CarsList";
import { useState, useEffect } from "react";
import axios from 'axios'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  const [cars, setCars] = useState([])

  useEffect(()=>{
    axios({
       method: "GET",
       url: "/server/cars"
    }).then((res)=>{
      setCars(res.data);
    })
  },[])

  return (
     <div>
      <Link to={"./components/CarsList/CarsList"}>
        <button>List of Cars</button>
      </Link>
      <Link to={"./components/CarsForm/CarsForm"}>
        <button>Add Car to List</button>
      </Link>
      <Routes>
        <Route path= "./components/CarsForm/CarsForm" element={<CarsForm />}/>
        <Route path= "./components/CarsList/CarsList" element={<CarList/>}/>
      </Routes>
    </div>
  )
}

export default App