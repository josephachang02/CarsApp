import { useState } from 'react';
import axios from 'axios';

const CarsForm = () => {
  
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    description: '',
    year: '',
    image: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

//   const handleOrganizerChange = (e) => {
//     const { name, value } = e.target;
//     setCarData(prevState => ({
//       ...prevState,
//       organizer: {
//         ...prevState.organizer,
//         [name]: value
//       }
//     }));
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: '/server/events',
        method: "POST",
        data: carData
      });
      if (response.status >= 200 && response.status < 300) {
        console.log('Event registered successfully:', response.data);
      } else {
        console.error('Error registering event:', response.data);
      }
    } catch (error) {
      console.error('There was an error sending the request:', error);
    }
    setCarData({
        title: '',
        make: '',
        model: '',
        description: '',
        year: '',
        image: ''
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="make">Make:</label>
          <input
            type="text"
            id="make"
            name="make"
            value={carData.make}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={carData.model}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={carData.description}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            name="year"
            value={carData.year}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="description">Image URL:</label>
          <input
            type="string"
            id="image"
            name="image"
            value={carData.image}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit Car to Form</button>
      </form>
    </div>
  );
};

export default CarsForm;