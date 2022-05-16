import axios from "axios";

export const getAllModels = async (make) => {
  let data = await axios
    .get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`
    )
    .then((res) => {
      return res.data.Results.map((obj) => obj.Model_Name);
    })
    .catch((err) => console.log(err));
  return data;
};
export const getVinInfo = async (vin) => {
  // jf1va1c60l9802711
  let response = await axios
    .get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`
    )
    .then((res) => {
      return res.data.Results[0];
    })
    .catch((err) => console.log(err));
  return response;
};

export const validateTitle = (string) => {
  const regex = /^[A-Za-z]+$/;
  return regex.test(string);
};
