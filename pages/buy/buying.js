import Head from "next/head";
import React from "react";

// comps
import Container from "react-bootstrap/Container";
import Buying from "../../components/Buying/Buying";

export default function Details() {
  return (
    <div>
      <Head>
        <title>Jettby | private rebuilt car sales</title>
        <meta name="description" content="rebuilt private party car sales" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-5">
        <Container>
          <h1 className="my-5">Buy your car</h1>
          <Buying />
        </Container>
      </main>
    </div>
  );
}
