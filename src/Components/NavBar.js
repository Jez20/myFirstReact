const NavBar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  {/* <a className="navbar-brand" href="#">Navbar</a> */}
  <a className="navbar-brand" href="/">PSG.LGD</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      {/* <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a> */}
      <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      <a className="nav-link" href="/employee">Employees</a>
      <a className="nav-link" href="/add">Add Employees</a>
      <a className="nav-link disabled" href="/">Disabled</a>
    </div>
  </div>
</nav>
        </div>

    )
}

export default NavBar;