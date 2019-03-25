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
      yesButton: false,
      noButton: true,
      rsvpstatus: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event, type) {
    event.preventDefault()
    if (type === true) {
      this.setState({yesButton: true, noButton: false})
      axios.post('/api/rsvpyes', {
      })
        .then(response => {
          console.log(response)
          this.updateRSVPstatus()
        })
        .catch(error => {
          console.log(error)
        })
    } else if (type === false) {
      this.setState({noButton: true, yesButton: false})
      axios.delete('/api/rsvpno', {
      })
      .then(response => {
        console.log(response)
        this.resetRSVPstatus()
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  updateRSVPstatus() {
    this.setState({ rsvpstatus: true })
    this.props.updateLargeGroup(this.state.rsvpstatus)
  }

  resetRSVPstatus() {
    this.setState({ rsvpstatus: false })
    this.props.updateLargeGroup(this.state.rsvpstatus)
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
  users: state.users,
  rsvp: state.rsvp
})

const mapDispatchToProps = (dispatch) => ({
  updateLargeGroup: (boolean) => dispatch({type: 'UPDATE_LARGEGROUP', boolean: boolean}),
  populateLargeGroup: () => dispatch({ type: 'POPULATE_LARGEGROUP' })
})

export default connect(mapStateToProps, mapDispatchToProps) (Event);
