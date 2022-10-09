import React, { useEffect, useState } from "react";
import { RootState } from "../../redux/store";

// redux
import { useSelector } from "react-redux";

// Components
import ListingCard from "./ListingCard/ListingCard";
import Primary from "./FacetSearch/Primary/Primary";

export default function Buying() {
  const listings = useSelector((state: RootState) => state.listings.listings);
  console.log(listings);
  return (
    <>
      <main className="Buying">
        <aside>
          <Primary />
        </aside>
        <section>
          {!!listings.length &&
            listings.map((listing) => {
              const {
                make,
                model,
                year,
                mileage,
                listing_price,
                zip_code,
                cloudinary_urls,
              } = listing;
              const title = `${make} ${model} (${year})`;

              return (
                <ListingCard
                  key={Number(mileage)}
                  carPicture={cloudinary_urls[0]}
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
