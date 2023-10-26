import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching car information:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="car-list">
        <h2 className='car-title'>Event List:</h2>
      {cars.map(cars => (
        <div key={cars.id} className="car-item">
          <h2>{cars.make} {cars.model} {cars.year}</h2>
          <p>Description: {cars.description}</p>
          <br></br>
          <img src = {cars.image}/>
        </div>
      ))}
    </div>
  );
};

export default CarList;