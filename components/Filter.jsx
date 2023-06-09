import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

export default function Filter() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    async function fetchTypes() {
      const response = await fetch("/api/types");
      const typesData = await response.json();
      setTypes(typesData.results);
    }
    fetchTypes();
  }, []);

  useEffect(() => {
    async function filterPokemon() {
      if (selectedType) {
        const response = await fetch(selectedType.url);
        const typeData = await response.json();
        const filteredPokemon = typeData.pokemon.map(
          (pokemon) => pokemon.pokemon
        );
        setFilteredPokemon(filteredPokemon);
      } else {
        setFilteredPokemon([]);
      }
    }
    filterPokemon();
  }, [selectedType]);

 const handleTypeClick = (type) => {
   if (type === selectedType) {
     setSelectedType(null);
     setFilteredPokemon([]);
   } else {
     setSelectedType(type);
   }
 };


  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          padding: "20px",
        }}
      >
        {types.map((type) => (
          <Button
            key={type.name}
            variant="contained"
            color={selectedType === type ? "secondary" : "primary"}
            onClick={() => handleTypeClick(type)}
          >
            {type.name}
          </Button>
        ))}
      </div>
      <ul>
        {selectedType &&
          filteredPokemon.map((pokemon) => (
            <li key={pokemon}>{pokemon.name}</li>
          ))}
      </ul>
    </>
  );
  
}
