import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leads';

class Leads extends Component {

  static propTypes = {
    leads: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getLeads();
    console.log(this.props.leads);
  }

  render() {
    return (
      <div>
        <h2>Leads</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {console.log(this.props.leads)}
            {this.props.leads.map((lead, i) => (
              <tr key={i}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button className='btn btn-danger btn-sm'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
})

export default connect(mapStateToProps, { getLeads })(Leads);
