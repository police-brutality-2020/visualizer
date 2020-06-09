const distance = (coordinateA, coordinateB) => {
  const lat = (coordinateA.lat - coordinateB.lat) ** 2;
  const long = (coordinateA.long - coordinateB.long) ** 2;
  return Math.sqrt(lat + long);
};

const getClosetCity = (coordinate, results) => {
  const initialDistance = distance(coordinate, results[0].geocoding);
  const closest = {
    city: results[0],
    distance: initialDistance,
  };
  for (let i = 0; i < results.length; i += 1) {
    const cityCoordinate = results[i].geocoding;
    const currentDistance = distance(coordinate, cityCoordinate);
    if (currentDistance < closest.distance) {
      closest.city = results[i].city;
      closest.distance = currentDistance;
    }
  }
  return closest;
};

export default getClosetCity;
