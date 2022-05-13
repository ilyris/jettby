import Head from "next/head";
import Hero from "../components/Hero/Hero";
import HowWeServe from "../components/HowWeServe/HowWeServe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jettby | private rebuilt car sales</title>
        <meta name="description" content="eat my peepee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <HowWeServe />
      </main>
    </div>
  );
}
