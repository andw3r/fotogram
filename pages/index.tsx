import type { NextPage } from "next";
import Header from "../components/Header";
import Info from "../components/Info";
import Logos from "../components/Logos";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Logos />
        <Services />
        <Info />
      </main>
      <Footer />
    </>
  );
};

export default Home;
