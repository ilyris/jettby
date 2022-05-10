import Head from "next/head";
import React, { useState, useEffect } from "react";
import Text from "../../components/inputs/Text";
export default function Details() {
  // Add car-card
  // first form will include (mile, color (ext, int), zip_code, origional owner)
  const [vinData, setVinData] = useState(
    JSON.parse(window.localStorage.getItem("vinDetails"))
  );
  return (
    <div>
      <Head>
        <title>Jettby | private rebuilt car sales</title>
        <meta name="description" content="eat my peepee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Selling!</h1>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "300px" }}
        >
          <path
            fill="#217426"
            d="M37.6,-63.2C51,-57.5,65.6,-51.9,70.9,-41.4C76.2,-30.9,72.2,-15.4,68.4,-2.2C64.5,10.9,60.7,21.9,55.7,32.9C50.6,43.9,44.4,55,34.9,60.9C25.4,66.9,12.7,67.6,1.7,64.7C-9.4,61.8,-18.8,55.3,-30,50.4C-41.2,45.4,-54.3,42.2,-61.9,34C-69.5,25.9,-71.7,13,-72.6,-0.5C-73.6,-14.1,-73.3,-28.1,-66.7,-38C-60.1,-47.8,-47.1,-53.4,-34.9,-59.8C-22.7,-66.2,-11.4,-73.3,0.4,-74C12.1,-74.6,24.3,-68.9,37.6,-63.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <Text label={"Color"} placeholder={"Color"} cid={"colorControl"} />
      </main>
    </div>
  );
}
