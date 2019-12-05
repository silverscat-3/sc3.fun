import React from "react"
import { Link } from "gatsby"

import "../styles/scss/style.scss"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <header className="header"><span id="site-title"><Link to={`/`}>{title}</Link></span></header>
        <main className="content">{children}</main>
      </div>
    )
  }
}

export default Layout
