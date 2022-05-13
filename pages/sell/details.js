import Head from "next/head";
import React from "react";

// comps
import Container from "react-bootstrap/Container";
import DetailsContainer from "../../components/Sell/DetailsContainer/DetailsContainer";

export default function Details() {
  return (
    <div>
      <Head>
        <title>Jettby | private rebuilt car sales</title>
        <meta name="description" content="eat my peepee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-5">
        <Container>
          <h1 className="my-5">Sell your car</h1>
          <DetailsContainer />
        </Container>
      </main>
    </div>
  );
}
