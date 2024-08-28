import { Jewelry, Layout } from "@/components"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const Perhiasan: NextPageWithLayout = () => {
  return (
    <Jewelry />
  )
}

Perhiasan.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Perhiasan