import React from "react"
import { Link } from "gatsby"

import "../styles/scss/style.scss"
import "../styles/scss/menubar.scss"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div className="root">
        <header className="header">
          <div className="title-bar">
            <span id="site-title">{title}</span>
          </div>
          <nav className="menu-bar">
            <ul>
              <li><Link to={'/'}>ホーム</Link></li>
              <li><Link to={'/articles'}>ブログ</Link></li>
              <li><Link to={'/profile'}>プロフィール</Link></li>
              <li><Link to={'/faq'}>FAQ</Link></li>
            </ul>
          </nav>
        </header>
        <main className="content">{children}</main>
	      <footer className="footer">
	        <p style={{ margin: 0 }}>Copyright (c) 2019 silverscat_3</p>
	      </footer>
      </div>
    )
  }
}

export default Layout
