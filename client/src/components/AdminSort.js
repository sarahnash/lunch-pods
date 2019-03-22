import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
const axios = require('axios')

class AdminSort extends Component {
  
  sortUsers(event) {
    event.preventDefault()
    this.props.makeSmallGroups()
    axios.post('/creategroups')
      .then(function(response){
        console.log(response)
      })
  }

  resetUsers(event) {
    event.preventDefault()
    this.props.resetUsers()
    axios.get('/largegroup')
    .then(function(response){
      console.log(response)
    })
  }

  render() {
    return (
      <div>
        <br/>
        <h3>Admin Section Only</h3>
        <Button id="Sort" type="button" onClick={(event) => this.sortUsers(event)}>Sort Lunch Pods!</Button>
        <Button id="Reset" type="button" onClick={(event) => this.resetUsers(event)}>Reset Users</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  makeSmallGroups: () => dispatch({type: 'MAKE_SMALL_GROUPS'}),
  resetUsers: () => dispatch({type: 'RESET_USERS'})
})

export default connect(mapStateToProps, mapDispatchToProps) (AdminSort);