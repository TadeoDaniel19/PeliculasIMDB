import React, { useEffect } from 'react'
import { Container, CircularProgress, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovieById } from '../../redux/actions/search'
import { movieResult as MovieResultSelector } from '../../redux/selectors'
export default ({ match }) => {
  const dispatch = useDispatch()
  const movieResult = useSelector(state => MovieResultSelector(state))
  useEffect(() => {
    const movieId = match.params.id
    if (!movieResult || movieResult && movieResult.imdbID !==movieId) {

      console.log(movieId)
      dispatch(searchMovieById({ movieId }))
    }
  })

  if (!movieResult) {
    return <CircularProgress size={50} color='primary' />
  }

  return (
    <Container>
      <Typography variant='h3'>{movieResult.Title}</Typography>
      <img src={movieResult.Poster} alt={movieResult.Title} />
      <Typography><strong>Actores: </strong> {movieResult.Actors} </Typography>
      <Typography><strong>Director: </strong> {movieResult.Director} </Typography>
      <Typography><strong>Pais: </strong> {movieResult.Country} </Typography>
      <Typography><strong>Clasificación: </strong> {movieResult.Rated} </Typography>
      <Typography><strong>Premios: </strong> {movieResult.Awards} </Typography>
      <Typography><strong>Sinopsis: </strong> {movieResult.Plot} </Typography>
    </Container>
  )
}