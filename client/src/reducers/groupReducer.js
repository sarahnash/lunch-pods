const initialState = {
  users: [],
  smallGroups: [],
  rsvp: false,
}

// TODO: working, better way to do mapusers?

const groupReducer = (state = initialState, action) => {
  console.log(state)
  switch(action.type) {
    case 'POPULATE_LARGEGROUP':
    const newusers = state.users.slice()
    const mapusers = action.users.map(user => {
      newusers.push(user)
      return newusers
    })
    return {
      ...state,
      users: newusers
    }
    // TODO: force largegroup component to re-render
    case 'UPDATE_LARGEGROUP':
    const rsvpstatus = action.boolean
    return {
      ...state,
      rsvp: rsvpstatus
    }
    case 'USER_DECLINE':
    const newUserDeclined = state.users.slice()
    newUserDeclined.splice(newUserDeclined.indexOf(action.user.user),1)
    return {
      ...state,
      users: newUserDeclined
    }
    case 'MAKE_SMALL_GROUPS':
    const participants = state.users.slice()
    participants.sort(function(a,b){return .5 - Math.random()}).slice()
      const splitParticipants = (participants) => {
        let totalGroups = []
        for (var i=1; i < participants.length / 4; i++) {
          totalGroups.push([])
        }
        for (var j=0; j < participants.length; j++) {
          totalGroups[(j%totalGroups.length)].push(participants[j])
        }
        return {
          ...state,
          smallGroups: totalGroups
        }
      }
      return splitParticipants(participants)
    case 'RESET_USERS':
    return {
      smallGroups: [],
      users: initialState.users
    }
    
    default:
      return state
  }
}

export default groupReducer