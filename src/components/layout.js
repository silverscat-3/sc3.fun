import React from "react"
import { Link } from "gatsby"

import "../styles/scss/style.scss"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div className="root">
        <header className="header">
          <div className="title-bar">
            <span id="site-title"><Link to={`/`}>{title}</Link></span>
          </div>
        </header>
        <main className="content">{children}</main>
	<footer className="footer">
	   <p>Copyright (c) 2019 silverscat_3</p>
	</footer>
      </div>
    )
  }
}

export default Layout
