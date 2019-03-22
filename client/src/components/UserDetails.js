import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'

class UserDetails extends Component {
  render() {
    return (
  <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {this.props.name}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Cohort Level and Current Client</h4>
      <p>
        Include links to their Ocean Profile, etc.
      </p>
    </Modal.Body>
</Modal>
    )}
}

export default UserDetails;
