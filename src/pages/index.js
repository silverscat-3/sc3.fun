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
        <h1>銀猫さん</h1>
        <p>現在サイトを大幅に改装しています。完成までにはおそらく時間がかかるのでもう少しお待ちください。</p>
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
