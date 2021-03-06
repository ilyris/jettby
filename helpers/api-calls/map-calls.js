import axios from 'axios';

export const getCoordinates = (callback) => {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(callback, console.log);
  }
};

export const returnZip = async (lat, long) => {
  let zip = await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.NEXT_PUBLIC_MAP_KEY}`
    )
    .then((res) => {
      return res.data.results[0].address_components[7].long_name;
    })
    .catch((err) => console.log(err));
  return zip;
};
