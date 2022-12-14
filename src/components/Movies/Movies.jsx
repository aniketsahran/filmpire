import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '../';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });
  
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
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  )
}

export default Movies;