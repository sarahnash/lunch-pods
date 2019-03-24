const initialState = {
  users: [],
  smallGroups: [],
  activeEvent: '2019-05-01',
}

const groupReducer = (state = initialState, action) => {
  console.log(state)
  switch(action.type) {
    case 'USER_GOING':
    const newUsersGoing = state.users.slice()
    newUsersGoing.push(action.user.user)
    return {
      ...state,
      users: newUsersGoing
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