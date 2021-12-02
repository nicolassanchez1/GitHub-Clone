import { types } from '../types/types'

const initialSate = {
  profile: [],
  repositories: [],
  error: ''
}

export const userReducer = (state = initialSate, action: any) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        profile: action.payload
      }
    case types.SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload
      }
    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
