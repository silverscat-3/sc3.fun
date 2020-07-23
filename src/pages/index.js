import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/scss/blog_index.scss"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="北半球でいちばんくだらないWebサイト" />
        <h1>銀猫さんのWebサイト</h1>
        <p>ようこそ、銀猫さんの<span style={{ textDecoration: 'line-through' }}>ホームページ</span>Webサイトへ!</p>
        <hr />
        <Img fixed={data.cat.childImageSharp.fixed} />
        <p>これはネコです。なんかトップページに置くものが無くて…</p>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    cat:file(relativePath: {eq: "cat.webp"}) {
      childImageSharp {
        fixed(width: 480) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
