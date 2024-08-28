import { Layout, ManCloth } from "@/components";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Pria: NextPageWithLayout = () => {
  return <ManCloth />;
};

Pria.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Pria;
