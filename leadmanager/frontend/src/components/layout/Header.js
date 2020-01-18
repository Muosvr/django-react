import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

class Header extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  render() {
    const { isAuthenticated } = this.props.auth
    const authLinks = (
      <ul className="navbar-nav mr-auto">
        <button
          className="nav-Link btn btn-info btn-sm text-light">Logout
        </button>
      </ul>
    )
    const guestLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to='/register' className='nav-link'>
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/login' className='nav-link'>
            Login
          </Link>
        </li>
      </ul>
    )
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Lead Manager</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>

      </nav>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Header)