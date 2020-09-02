import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Head from '../components/Head'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi, I am Peter</h1>
      <h2>I am frontend developer. What's up?</h2>
      <p>
        Do you want to chat? <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
