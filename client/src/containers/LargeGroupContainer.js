import React, { Component } from 'react'
import User from '../components/User.js'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
const axios = require('axios')
const eventdate = '2019-05-01'

class LargeGroupContainer extends Component {

  componentDidMount() {
    axios.get('/api/largegroup', {
      params: {
        eventdate: eventdate
      }
    })
      .then(function(response){
        this.props.populateLargeGroup(response) 
      })
      .catch(function (error) {
        console.log(error)
      })
  }

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

const mapDispatchToProps = (dispatch) => ({
  populateLargeGroup: (response) => dispatch({type: 'POPULATE_LARGEGROUP', users: response})
})

export default connect(mapStateToProps, mapDispatchToProps) (LargeGroupContainer);
