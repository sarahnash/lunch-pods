import React, { Component } from 'react'
import User from '../components/User.js'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
const axios = require('axios')

class LargeGroupContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      activeEvent: '2019-05-01'
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.createNewUsers = this.createNewUsers.bind(this)
  }

  // bind this to these functions, break out, but how to handle catch error?

  componentDidMount() {
    axios.get('/api/largegroup', {
      params: {
        eventdate: this.state.activeEvent
      }
    })
      .then(response => {
        console.log('api/largegroupresponse', response.data)
        this.createNewUsers(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  createNewUsers(newusersarray) {
    const newusers = newusersarray
    this.setState({users: newusers})
    console.log('newcomponentstate', this.state)
    this.props.populateLargeGroup(this.state.users)
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
  populateLargeGroup: (users) => dispatch({type: 'POPULATE_LARGEGROUP', users: users})
})

export default connect(mapStateToProps, mapDispatchToProps) (LargeGroupContainer);
