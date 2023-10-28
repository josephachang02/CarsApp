import { useState } from 'react';
import axios from 'axios';

const CarsForm = () => {
  
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    color: '',
    year: '',
    image: ''
  })

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setCarData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

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

const handleSubmit = (e) => {
  e.preventDefault();
    axios({
      method: "POST",
      url: "/server/cars",
      data: carData // YOU WILL FIND THIS DATA IN ***req.body*** OF THE ROUTE
  }).then((res)=>{
      console.log(res.data);
      setCarData({
          make: "",
          model: "",
          color: "",
          year: "",
          image: ""
      })
     
  })
}


  return (
    <div>
      <h1>Add a New Vehicle to your List</h1>
      <form onSubmit={handleSubmit}>

      Brand: <input type="text" name="make" value={carData.make} onChange={(e) => setCarData({...carData, make: e.target.value})} /><br/>
                Model: <input type="text" name="model" value={carData.model} onChange={(e) => setCarData({...carData, model: e.target.value})} /><br/>
                Color: <input type="text" name="color" value={carData.color} onChange={(e) => setCarData({...carData, color: e.target.value})} /><br/>
                Year: <input type="text" name="year" value={carData.year} onChange={(e) => setCarData({...carData, year: e.target.value})} /><br/>
                Image Link: <input type="text" name="image" value={carData.image} onChange={(e) => setCarData({...carData, image: e.target.value})} /><br/>

        <button type="submit">Submit Car to Form</button>
      </form>
    </div>
  );
};

export default CarsForm;