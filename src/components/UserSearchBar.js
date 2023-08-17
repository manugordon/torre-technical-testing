import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const UserSearchBar = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleSearchClick = () => {
        onSearch(username);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };
    return (
        <div>
            <TextField
                label="Search Username"
                value={username}
                sx={{
                    color: 'white',
                    '& input': {
                        color: 'white'
                    },
                    '& label': {
                        color: 'white'
                    },
                    '& label.Mui-focused': {
                        color: 'white'
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: 'white'
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white'
                        },
                        '&:hover fieldset': {
                            borderColor: 'white',
                            borderWidth: 2
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white'
                        }
                    },
                    '& .MuiSvgIcon-root': {
                        color: 'white'
                    }
                }}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleSearchClick} >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default UserSearchBar;