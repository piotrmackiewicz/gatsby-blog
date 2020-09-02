import React from 'react'
import Layout from '../components/Layout/Layout'
import Head from '../components/Head'

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me out is{' '}
        <a
          href="https://www.linkedin.com/in/piotr-mackiewicz-9a253a138/"
          target="_blank"
        >
          LinkedIn
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
