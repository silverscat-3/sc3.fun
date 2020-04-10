import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class FAQPage extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="よくある質問" />
                <h1>よくある質問</h1>
                
                <session>
                    <h2>Q. イラストをSNS等のアイコンとして使用したい。<br />Q. イラストを使ってステッカーを作りたい。<br />Q. その他、とにかくイラストを使って何かしたい!</h2>
                    <strong>A. クリエイティブ・コモンズ 表示 - 非営利 4.0(CC BY-NC 4.0)に従う限り、自由に使用して構いません。</strong>
                    <p>つまるところ、非営利的な目的で使い、作者名を明記するならば、どのような用途で使おうが問題ありません。連絡も必要ありません。<br />営利的な目的(コミックマーケット等を含む)で使用する場合はEメール等で連絡してください。</p>
                </session>
            </Layout>
        )
    }
}

export default FAQPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
