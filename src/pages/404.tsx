import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Head from '../components/Head'

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page not found</h1>
      <Link to="/">Go to Homepage</Link>
    </Layout>
  )
}

export default NotFoundPage
