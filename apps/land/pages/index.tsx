import { NextPage } from "next";
import Head from "next/head";
import { Button } from "ui";
import MainFooter from "../components/footer/MainFooter";
import MainNavigation from "../components/navigation/MainNavigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Web - Turborepo Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavigation />
      <main>
        <section className="h-screen w-full bg-[url('/hero-bg.png')] bg-cover bg-no-repeat">
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
        </section>
        <section>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
          <h1>asdasdasdasd</h1>
        </section>
      </main>
      <MainFooter/>
    </>
  );
};

export default Home;
