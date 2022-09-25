import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import ListingCard from "./ListingCard/ListingCard";

export default function Buying() {
  const [allListings, setAllListings] = useState<Array<any>>([]);

  const getAllListings = async (): Promise<Array<any>> => {
    const res = await axios.get("/api/get/sell/listing");
    console.log(res);
    setAllListings(res.data.data);
    return res.data.data;
  };

  useEffect(() => {
    if (allListings.length === 0) getAllListings();
  }, []);

  return (
    <>
      <h2>Listings</h2>
      <main className="Buying">
        <aside>Menu</aside>
        <section>
          {allListings.length &&
            allListings.map((listing) => {
              const { make, model, year, mileage, listing_price, zip_code } =
                listing;
              const title = `${year} ${make} ${model}`;

              return (
                <ListingCard
                  key={Number(mileage)}
                  carPicture={null}
                  carTitle={title}
                  carPrice={listing_price}
                  carLocation={zip_code}
                  carMileage={mileage}
                />
              );
            })}
        </section>
      </main>
    </>
  );
}
