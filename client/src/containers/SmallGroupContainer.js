import React, { Component } from 'react'
import SmallGroup from '../components/SmallGroup.js'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
const axios = require('axios')

class SmallGroupContainer extends Component {

  componentDidMount() {
    axios.get('/smallgroups')
      .then(function(response){
        console.log(response)
        console.log('these are the small groups in the db!')
      })
  }

  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
        {this.props.smallGroups.map((smallGroup, index) => <SmallGroup smallGroup = {smallGroup} key={index}/>)}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  smallGroups: state.smallGroups
})

export default connect(mapStateToProps) (SmallGroupContainer);
