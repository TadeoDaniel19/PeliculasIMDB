import { get } from 'lodash'
import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETE
} from '../../consts/actionTypes'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return { ...state, isLoading:true }
    case SEARCH_MOVIE_ERROR:
      return { ...state, isLoading:false, movies: null }
    case SEARCH_MOVIE_COMPLETE:
      console.log(action)
      return { ...state, isLoading:false, movieResults: action.results.data }
    default:
      return { ...state }
  }
} 