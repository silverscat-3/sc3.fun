import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/scss/blog.scss"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className="blog">
          <header className="blog-header">
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>

          <hr />

          <div className="blog-content">
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>

	  <hr />

	  <footer className="blog-footer">
	    <nav>
	      <ul>
	        {previous && (
			<li><Link to={previous.fields.slug} rel="prev">← {previous.frontmatter.title}</Link></li>
		)}
	        <li><Link to={"/articles"}>ブログ一覧へ戻る</Link></li>
	        {next && (
			<li><Link to={next.fields.slug} rel="prev">{next.frontmatter.title} →</Link></li>
		)}
	      </ul>
	    </nav>
	  </footer>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
      }
    }
  }
`
