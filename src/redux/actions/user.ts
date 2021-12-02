import axios from 'axios'
import { types } from '../types/types'
import { URL } from '../../constants/Api'

const setRepositories = (repositories: []) => ({
  type: types.SET_REPOSITORIES,
  payload: repositories
})

const setUser = (profile: string) => ({
  type: types.SET_USER,
  payload: profile
})

const setError = (error: string) => ({
  type: types.SET_USER,
  payload: error
})

export const getReporitories = (user: string) => {
  return async (dispatch: any) => {
    try {
      const {data, status} = await axios.get(`${URL}/${user}/repos`)
      console.log(data, status)
      dispatch(setRepositories(data))
    } catch (error) {
      console.log(error)
        setError(String(error))
    }
  }
}

export const getUser = (user: string) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get(`${URL}/${user}`)
      dispatch(setUser(data))
    } catch (error) {
        setError(String(error))
    }
  }
}
