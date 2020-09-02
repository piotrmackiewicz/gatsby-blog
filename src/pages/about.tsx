import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Head from '../components/Head'

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ultricies nibh sit amet nibh euismod, a iaculis augue vehicula. Nam id
        leo non tellus efficitur malesuada. Nam a lacinia magna. Vivamus ac
        scelerisque nulla. Maecenas nec est quis diam tincidunt ornare. Praesent
        sed facilisis risus, vitae ornare mauris. Vestibulum dignissim volutpat
        accumsan. Donec maximus, arcu a euismod cursus, lorem purus convallis
        enim, vel iaculis diam nulla venenatis enim. Curabitur posuere justo
        pulvinar, vulputate lorem eu, pellentesque tortor. Nunc facilisis
        tincidunt nisl vitae eleifend. Integer ullamcorper faucibus sem, at
        aliquet nibh scelerisque eu. Sed aliquam turpis quis fermentum feugiat.
        In leo metus, commodo sed euismod a, auctor quis purus.
      </p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
