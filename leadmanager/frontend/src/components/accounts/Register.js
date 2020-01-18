import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createMessage } from '../../actions/messages';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  }

  static = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    createMessage: PropTypes.func.isRequired
  }

  onSubmit = e => {
    e.preventDefault();
    const { password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Password do not match' });
    } else {
      const newUser = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      }
      this.props.register(newUser)
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />
    }
    const { username, email, password, password2 } = this.state
    return (
      <div>
        <div className="col-md-6 m-auto">
          <div className="card card-body mt-5">
            <h2 className='text-center'>Register</h2>
            <form onSubmit={this.onSubmit}>
              <div key='username' className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className='form-control'
                  name='username'
                  onChange={this.onChange}
                  value={username}
                />
              </div>
              <div key='email' className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className='form-control'
                  name='email'
                  onChange={this.onChange}
                  value={email}
                />
              </div>
              <div key='password' className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className='form-control'
                  name='password'
                  onChange={this.onChange}
                  value={password}
                />
              </div>
              <div key='password2' className="form-group">
                <label>Password 2</label>
                <input
                  type="password"
                  className='form-control'
                  name='password2'
                  onChange={this.onChange}
                  value={password2}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already have an account? <Link to='/login'>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register, createMessage })(Register)