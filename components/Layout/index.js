import Head from "next/head";
import Navbar from "../Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>GPAD Interface</title>
        <meta name="description" content="BLHZ Medel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
};


export default Layout