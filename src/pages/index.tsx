import React, { ReactElement } from "react";
import { Layout, Products } from "@/components";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return <Products />;
};

Home.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;
