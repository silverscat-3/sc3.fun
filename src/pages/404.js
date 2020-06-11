import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>工事ch... じゃなかった、ファイルが見つかりません。</h1>
        <p>このページは存在しません。消滅したかURLを間違えています。本当に工事中でその内できあがるかもしれませんが、とにかく今は存在しません。</p>
	<p style={{textAlign: 'center'}}><Link to={`/`}>Topページへ戻る</Link></p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
