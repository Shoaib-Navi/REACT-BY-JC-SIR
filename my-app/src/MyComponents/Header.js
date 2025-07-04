//rfc for creating component----
//RFC stand for React Functional Component
//impt for propTypes
//rfc is a shorthand/snippet trigger used in VS Code (with the ES7+ React/Redux Snippets extension).
// Shortcut	Snippet Generated
// rfc	React Functional Component (named export)
// rfce	React Functional Component (with export default)
// rafce	Arrow function component (with export default)
// rcc	React Class Component
// redux	Redux boilerplate



//  Component Types
// Functional Component	Simple JS function. Uses hooks. Preferred in modern React.
// Class Component	Uses class, this, and lifecycle methods. Older approach.

import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand bold" href="#">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.about}</a>
        </li>
     
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      {props.searchBar?<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:"No search bar"}
    </div>
  </div>
</nav>
  )
}

// //isRequired for compulsion
// Navbar.propTypes = {
//   title: propTypes.string,
//   aboutText: propTypes.string
// }

// Navbar.defaultProps = {
//   title:"set title here",
//   aboutText: "set about text here.",
//   searchBar:false
// }


// export default function Navbar