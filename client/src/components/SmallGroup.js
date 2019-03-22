import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import User from './User'

class SmallGroup extends Component {

  render() {
    return (
      <div>
      <br/>
        <Row style={{border: 'solid'}}>
        {this.props.smallGroup.map((user, index) => <User user={user} key={index}/>)}
        </Row>
      </div>
    )
  }
}

export default SmallGroup;