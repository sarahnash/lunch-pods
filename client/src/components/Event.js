import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
const axios = require('axios')

class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user:{
        photo: '../assets/sarah-headshot.jpg',
        name: 'Sarah',
        link: 'http://sarahnash.dev/'
      },
      yesButton: false,
      noButton: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  userGoing() {
    this.props.userGoing(this.state)
  }

  userDecline() {
    this.props.userDecline(this.state)
  }

  handleSubmit(event, type) {
    event.preventDefault()
    if (type === true) {
      this.userGoing()
      this.setState({yesButton: true, noButton: false})
      axios.post('/rsvpyes')
        .then(function(response){
          console.log(response)
        })
    } else if (type === false) {
      this.userDecline()
      this.setState({noButton: true, yesButton: false})
      axios.delete('/rsvpno')
      .then(function(response){
        console.log(response)
      })
    }
  }

  render() {
    return (
      <div>
        <br/>
        <Row>
          <Col>
            <h4>May 7, 2019</h4>
            <h2><b>Inaugural Lunch Pods!</b></h2>
            <p>Hosted by Finneus Dolphin <Image width={42} height={42} src='../assets/Finneus.png' roundedCircle/></p>
          </Col>
          <Col>
            <p><b>Are you going?</b>  {this.props.users.length} people going</p>
            <Button id="Going" variant="info" type="button" disabled={this.state.yesButton} onClick={(event) => this.handleSubmit(event, true)}>
            Yes
            </Button>
            <Button id="Declined" variant="info" type="button" disabled={this.state.noButton} onClick={(event) => this.handleSubmit(event, false)}>
            No
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  userGoing: (user) => dispatch({type: 'USER_GOING', user: user}),
  userDecline: (user) => dispatch({type: 'USER_DECLINE', user: user})
})

export default connect(mapStateToProps, mapDispatchToProps) (Event);
