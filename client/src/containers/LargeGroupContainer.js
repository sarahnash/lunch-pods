import React, { Component } from 'react'
import User from '../components/User.js'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
const axios = require('axios')

class LargeGroupContainer extends Component {

  componentDidMount() {
    axios.get('/api/largegroup')
      .then(function(response){
        console.log('users', response)
      })
  }

  // TODO: grab results from the large group and pass as props

  render() {
    return (
      <div>
        <br/>
        <Row>
          {this.props.users.map((user, index) => <User user={user} key={index}/>)}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps) (LargeGroupContainer);
