import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(()=>{
    axios({
        method: 'GET',
        url: '/server/cars',
    }).then((res)=>{
        setCars(res.data)
    })
      .catch((error) => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  return (
    <>
    <div className="car-list">
        <h2 className='car-title'>Cars List:</h2>
        <ul> 
        {cars.map((car) => (
          <div style={{ backgroundColor: "gray", padding: "5px" }}>
            <h2>{car.name}</h2>
            <h3>{car.model}</h3>
            <h3>{car.make}</h3>
            <h3>{car.color}</h3>
            <img style={{ width: "200px" }} src={car.url} alt={car.model}></img>
          </div>
        ))}
      </ul>
    </div>
    </>
  );
};

export default CarList;