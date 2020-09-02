import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import blogStyles from './blog.module.scss'
import Head from '../components/Head'

interface BlogPageProps {
  data: {
    allContentfulBlogPost: {
      edges: Array<{
        node: {
          publishedDate: string
          slug: string
          title: string
        }
      }>
    }
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {posts.map(({ node }) => (
          <li key={node.slug} className={blogStyles.post}>
            <Link to={`/blog/${node.slug}`}>
              <h2>{node.title}</h2>
              <p>{node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          publishedDate(formatString: "MMMM Do, YYYY")
          slug
          title
        }
      }
    }
  }
`

export default BlogPage
