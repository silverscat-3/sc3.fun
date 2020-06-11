import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Donate extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="寄付 Donate" />
        <h1>寄付 Donate</h1>
        <p style={{fontWeight: 'bold', fontStyle: 'italic'}}>Money! Money! Money! Must be funny! In the rich man's world!   --ABBA Money, money, money</p>
        <hr />
        <p>ここのリンクやQRコードでワシに投げ銭を投げ付けることができます。</p>

      </Layout>
    )
  }
}

export default Donate

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
