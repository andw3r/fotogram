import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../assets/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
