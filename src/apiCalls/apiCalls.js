export const fetchHouses = async () => {
    
  const resp = await fetch(` http://localhost:3001/api/v1/houses`);
  const houses = await resp.json();

  console.log(houses)
};