import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ProfilePage extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="プロフィール" />
                <h1>自己紹介</h1>
                <hr />
                <p>「銀猫さん」です。「銀猫」だの「邪淫猫」でも構いませんが、正式名称は「銀猫さん」です。<strong>それとワシは17歳(2020年4月現在)です。40代なわけないです(全ギレ)</strong></p>
                <p>分散マイクロブログを開発しています。</p>

                <h2>各種アカウント</h2>
                <hr />
                <h3><a href="https://fedibird.com/@silverscat_3">fedibird.com</a></h3>
                <p>メインのMastodonアカウント。だいたいここに居る。</p>
        
                <h3><a href="https://groundpolis.app/@silverscat_3">groundpolis.app</a></h3>
                <p>groundpolis.appアカウント。ハゲチカにウンコを投げ付けるためだけに作られたアカウンコ。</p>
                <p style={{ fontSize: 'small'}}>で、結局ハゲチカって何て呼べばいいの?</p>
        
                <h3><a href="https://misskey.io/@silverscat_3">misskey.io</a></h3>
                <p>misskey.ioアカウント。あんまり使ってない。</p>

                <h3><a href="https://twitter.com/intent/user?user_id=1078658958502416385">Twitter</a></h3>
                <p>Twitterアカウント。ほとんどイラストを観測するためだけのもの。</p>

                <h3><a href="https://keybase.io/silverscat_3">Keybase</a></h3>
                <p>なんか個人を証明できるヤツ。</p>

                <h3><a href="https://github.com/silverscat-3">GitHub</a></h3>
                <p>ソースコード置き場。</p>

                <h3><a href="https://www.youtube.com/channel/UCdgnFJA5troFILCkgwG6wzg">Youtubeチャンネル</a></h3>
                <p>クソ動画置き場。</p>
            </Layout>
        )
    }
}

export default ProfilePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
