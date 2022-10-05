import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Stack spacing={2}>
      <Pagination
       count={pageNumbers.length} 
       variant="outlined" 
       shape="rounded"
       page={currentPage}
       onChange={(e, value) => paginate(value)}
        />
    </Stack>
  );
}
