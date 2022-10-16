import axios from "axios";

interface SearchDataInterface {
  make: string;
  model: string;
  price: number;
  distance: number;
  zip_code: number;
}

interface VehicleIdInterface {
  id: string | string[];
}

export const getCars = async ({
  make,
  model,
  price,
  distance,
  zip_code,
}: SearchDataInterface) => {
  // get zipcode data
  const res = await axios.post("/api/post/search/buy", {
    make,
    model,
    price,
    distance,
    zip_code,
  });
  return res;
};

export const getVehicleDetails = async (id: string | string[]) => {
  // get zipcode data
  const res = await axios.post(`/api/get/vehicleDetails/${id}`, {
    id,
  });
  return res.data;
};
