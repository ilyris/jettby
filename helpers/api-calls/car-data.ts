import axios from "axios";

interface SearchData {
  make: string;
  model: string;
  price: number;
  distance: number;
  zip_code: number;
}

export const getCars = async ({
  make,
  model,
  price,
  distance,
  zip_code,
}: SearchData) => {
  console.log({ make, model, price, distance, zip_code });
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
