import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export default class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  }

  onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
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
