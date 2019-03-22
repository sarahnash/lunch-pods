import React, { Component } from 'react';
import Event from './Event.js'
import LargeGroupContainer from '../containers/LargeGroupContainer.js'
import AdminSort from './AdminSort'
import SmallGroupContainer from '../containers/SmallGroupContainer.js';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const smallgroupsready = this.props.smallGroups[0];
    return (
      <div className="text-center">
          <h1>Lunch pods!</h1>
          <p>Sign up to have lunch with a random group of Fins</p>
          <Event />
          {smallgroupsready ? (
            <SmallGroupContainer/>
          ) : (
            <LargeGroupContainer/>
          )}
          <AdminSort/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  smallGroups: state.smallGroups,
})

export default connect(mapStateToProps) (App);
