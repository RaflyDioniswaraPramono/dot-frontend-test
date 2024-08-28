import React, { ReactElement } from 'react'
import { Layout, WomanCloth } from '@/components'
import { NextPageWithLayout } from '../_app'

const Wanita: NextPageWithLayout = () => {
  return (
    <WomanCloth />
  )
}

Wanita.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Wanita