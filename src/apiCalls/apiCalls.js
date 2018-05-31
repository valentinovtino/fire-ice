export const fetchHouses = () => {
//   const resp = await fetch(` http://localhost:3001/api/v1/houses`);
//   const houses = await resp.json();

  //const swornMems = await getSwornMems(houses);
//   const combine = await houses.map((house, index) => {
//     house.swornMems = swornMems[index];
//     return house;
//   });
return fetch(`http://localhost:3001/api/v1/houses`)
.then(response => response.json())
//   return houses;
};

export const getSwornMems = async (houses) => {
  const promises = houses.map(async (house) => {
    const swornMems = house.swornMembers.map(async(API) => {
      const resp = await fetch(API);
      const swornMems = await resp.json();
      return swornMems;
    });
    return await Promise.all(swornMems);
  });
  return Promise.all(promises);
};