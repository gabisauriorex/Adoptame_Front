import React from 'react'
import { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Search as SearchIcon } from '@mui/icons-material';

export default function SearchBar() {




    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        border: '1px solid #01579b',
        color:"#01579b",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(5),
        marginLeft: 0,
        width: '100%',
        height:'80%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: '50%',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: '',
      
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));



  return (
    <div>
    
          <Search sx={{ flexGrow: 1  }}>
          <SearchIconWrapper  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <SearchIcon />
          </SearchIconWrapper>
         <StyledInputBase
         placeholder="Buscar..."
         inputProps={{ 'aria-label': 'Buscar' }}
        />
       </Search>

    </div>
  )
}
