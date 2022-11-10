import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '../';

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();
  
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  
  if(!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" mt="20px">
        <Typography variant="h4">
          No movies that match the name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if(error) {
    return 'An error has occured. Please try again later.';
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  )
}

export default Movies;