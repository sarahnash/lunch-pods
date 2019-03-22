import React, { Component } from 'react'
import UserDetails from '../components/UserDetails'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {modalShow: false}
    this.hover = this.hover.bind(this)
  }

  hover(event) {
    event.preventDefault()
    this.setState({ modalShow: true })
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    let { photo, name } = this.props.user

    return (
     <Col >
        <Image width={128} height={128} style={{cursor: 'pointer'}} src={photo} onClick={this.hover} alt={name} roundedCircle/>
        <div className="text-center">
          {name}
        </div>
        <UserDetails name={name} show={this.state.modalShow} onHide={modalClose}/>
      </Col>
    )
  }
}

export default User;
