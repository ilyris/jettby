import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getVehicleDetails } from "../../helpers/api-calls/car-data";
// comps
import Container from "react-bootstrap/Container";
import CarDetails from "../../components/pages/CarDetails/CarDetails";

export default function Details() {
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const title =
    !!vehicleDetails &&
    `${vehicleDetails.make} ${vehicleDetails.model} (${vehicleDetails.year})`;
  useEffect(() => {
    if (id) {
      getVehicleDetails(id).then((res) => {
        setVehicleDetails(res);
      });
    }
  }, [id]);

  return (
    <div>
      <Head>
        <title>Jettby | private rebuilt car sales</title>
        <meta name="description" content="rebuilt private party car sales" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-5">
        <Container>
          <h1 className="my-5">{title}</h1>
          <CarDetails data={vehicleDetails} />
        </Container>
      </main>
    </div>
  );
}
