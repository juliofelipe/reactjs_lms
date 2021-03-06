import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" to="/">Learn Online</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teachers</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                  User
                </a>
                <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
                  <li><Link className="dropdown-item" to="/user-login">User Login</Link></li>
                  <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
                  <li><hr className="dropdwon-divider" /></li>
                  <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
             </li>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;