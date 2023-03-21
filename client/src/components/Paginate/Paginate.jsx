import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginate() {
  return (
    <Stack spacing={2} sx={{display:'flex', flexDirection:"row" ,justifyContent:"center"}}>
   
      <Pagination count={5} color="primary" />
 
    </Stack>
  );
}