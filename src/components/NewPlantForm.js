import React,{useState} from "react";

function NewPlantForm({postNewPlant}) {
  const initialState = {
    name:  "",
    image: "",
    price: "0.00",
  }
  const [formData, setFormData] = useState(initialState)

  //handlers
  const handleFormData = (e)=>{
    const {name, value} = e.target
    setFormData(formData =>(
      {
      ...formData,
      [name] : value
      }
    ))}
  
  function handleSubmit (e){
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newPlant => postNewPlant(newPlant))
      .then(setFormData(initialState))
      .catch(err => console.log(err))
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value = {formData.name}  onChange={handleFormData}/>
        <input type="text" name="image" placeholder="Image URL" value = {formData.image} onChange={handleFormData}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value = {formData.price} onChange = {handleFormData}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
