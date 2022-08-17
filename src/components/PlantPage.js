import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plantData, setPlantData] = useState([])
  const[searchQuery, setSearchQuery] = useState("")
  useEffect(()=> {
    fetch("http://localhost:6001/plants") 
    .then(r=>r.json())
    .then(data => setPlantData(data))
  },[])

  const postNewPlant = (plant)=>{
    setPlantData([...plantData, plant])
  }

  const onSetSearchQuery = (e)=>{
    setSearchQuery(e.target.value)
  }



  return (
    <main>
      <NewPlantForm postNewPlant={postNewPlant}/>
      <Search handleSearchQuery = {onSetSearchQuery} searchQuery={searchQuery}/>
      <PlantList plantData={plantData} searchQuery={searchQuery}/>
    </main>
  );
}

export default PlantPage;
