import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData, searchQuery}) {

  const searchResult = plantData.filter((plant)=>{
    return plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const plantCard = searchResult.map((plant)=>{
    return <PlantCard key = {plant.id} plant = {plant} />
  })
  
  return (
    <ul className="cards">{plantCard}</ul>
  );
}

export default PlantList;
