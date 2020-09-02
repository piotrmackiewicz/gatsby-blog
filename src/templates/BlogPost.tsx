import React from 'react'
import { graphql } from 'gatsby'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import Layout from '../components/Layout/Layout'
import Head from '../components/Head'

interface BlogPostProps {
  data: {
    contentfulBlogPost: {
      title: string
      publishedDate: string
      body: {
        json: any
      }
    }
  }
}

type EmbeddedAssetBlockNode = {
  data: {
    target: {
      fields: {
        title: { 'en-US': string }
        file: { 'en-US': { url: string } }
      }
    }
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const options: Options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields?.title['en-US']
        const url = node.data.target.fields?.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

export default BlogPost
