const distance = (coordinateA, coordinateB) => {
  const lat = (coordinateA.lat - coordinateB.lat) ** 2;
  const long = (coordinateA.long - coordinateB.long) ** 2;
  return Math.sqrt(lat + long);
};

const getClosetCity = (coordinate, results) => {
  const initialDistance = distance(coordinate, results[0].geocoding);
  const city = {
    name: results[0].city,
    distance: initialDistance,
    coordinate: results[0].geocoding,
  };
  for (let i = 0; i < results.length; i += 1) {
    const cityCoordinate = results[i].geocoding;
    const currentDistance = distance(coordinate, cityCoordinate);
    if (currentDistance < city.distance) {
      city.name = results[i].city;
      city.distance = currentDistance;
      city.coordinate = cityCoordinate;
    }
  }
  return city;
};

export default getClosetCity;
