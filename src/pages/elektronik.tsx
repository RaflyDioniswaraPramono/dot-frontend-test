import { Electronics, Layout } from "@/components"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const Elektronik: NextPageWithLayout = () => {
  return (
    <Electronics />
  )
}

Elektronik.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Elektronik