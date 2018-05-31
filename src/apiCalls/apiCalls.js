export const fetchHouses = async() => {

  return fetch(`http://localhost:3001/api/v1/houses`)
    .then(response => response.json())
};

export const getSwornMems = async (house) => {
  const swornMems = house.swornMembers.map(async(API) => {
    const resp = await fetch(API);
    const swornMems = await resp.json();

    return swornMems;
  });

  return await Promise.all(swornMems);
};

