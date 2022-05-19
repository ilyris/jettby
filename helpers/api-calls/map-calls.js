import axios from 'axios';

export const getCoordinates = (callback) => {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(callback, console.log);
  }
};

export const returnZip = async (lat, long) => {
  console.log('in returnZip', lat, long);
  let zip = await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.NEXT_PUBLIC_MAP_KEY}`
    )
    .then((res) => {
      return res.data.results[4].address_components[0].long_name;
    })
    .catch((err) => console.log(err));
  return zip;
};
