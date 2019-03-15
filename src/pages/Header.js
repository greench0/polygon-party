import React from 'react';



class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="./assets/images/logo.png" alt="Logo" height="50" width="50" href="/" />
        <a className="navbar-brand" href="/create">
        <strong>Polygon Party</strong>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/single">Single</a>
            </li>

           <li className="nav-item dropdown float-right">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Create</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/create">Blocks</a>
                <a className="dropdown-item" href="/signup">Signup</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/misc">Misc</a>
              </div>
            </li>
          

          </ul>

          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
      
        </div>
      </nav>
    )
  }
}


export default Header;