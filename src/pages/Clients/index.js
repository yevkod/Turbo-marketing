import React from 'react'
import Layout from '../../components/Layout'
import ClientsList from './ClientsList'
import Intro from './Intro'

const Clients = () => {
  return (
    <Layout>
        <Intro />
        <ClientsList/>
    </Layout>
  )
}

export default Clients
