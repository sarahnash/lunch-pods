import React, { Component } from 'react'
import User from '../components/User.js'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
const axios = require('axios')

class LargeGroupContainer extends Component {

  componentDidMount() {
    axios.get('/largegroup')
      .then(function(response){
        console.log(response)
        console.log('this is the axios.get call!')
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
