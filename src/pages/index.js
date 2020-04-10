import React from "react"
import { Link, graphql } from "gatsby"

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
    }
  }
`
