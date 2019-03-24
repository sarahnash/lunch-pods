import React, { Component } from 'react'
import User from '../components/User.js'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
const axios = require('axios')

class LargeGroupContainer extends Component {

  componentDidMount() {
    axios.get('/api/largegroup', {
      params: {
        eventdate: this.state.activeEvent
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
  users: state.users,
  activeEvent: state.activeEvent
})

const mapDispatchToProps = (dispatch) => ({
  populateLargeGroup: (response) => dispatch({type: 'POPULATE_LARGEGROUP', users: response})
})

export default connect(mapStateToProps, mapDispatchToProps) (LargeGroupContainer);
