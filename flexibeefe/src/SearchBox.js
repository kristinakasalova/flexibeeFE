import React from 'react';
import { TextField } from '@mui/material';

const SearchBox = ({ onSearchChange }) => {
    return (
        <TextField
            label="Search"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
};

export default SearchBox;
