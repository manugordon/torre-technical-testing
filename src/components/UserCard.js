import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import App from '../App';

// This function adds an icon in front based on the proficiency
const proficiencyIcons = {
    novice: <StarOutlineIcon fontSize='small' />,
    proficient: <StarHalfIcon fontSize='small'/>,
    expert: <StarIcon fontSize='small'/>,
    'no-experience-interested': <FavoriteIcon fontSize='small'/>,
  };
const handleClick= () => {alert('Click')}

//This function capitalizes the firts letter of the profiencies and deletes the - .
const capitalizeFirstLetter = (text) => {
    return text
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };



const UserCard = ({ userData }) => {
    const [searchAgain, setSearchAgain] = useState(false);
    // FILTER THE SKILLS BY PROFICIENCY
    const skills = userData.strengths 
    const skillsByProficiency = {};
    skills.forEach(skill => {
        const proficiency = skill.proficiency;
        if (!skillsByProficiency[proficiency]) {
            skillsByProficiency[proficiency] = [];
        }
        if (skillsByProficiency[proficiency].length < 5) {
            skillsByProficiency[proficiency].push(skill);
        }
    });

    const handleBackClick = () => {
        setSearchAgain(true);
      };
    
      if (searchAgain) {
        return <App/>;
      }

    return (
        <div className='user-details-container'>
            <IconButton onClick={handleBackClick} sx={{ color: 'white', marginLeft:'-20em' }}>
                <ArrowBackIcon />
            </IconButton>
            <div className='avatar-container'>
                <Avatar
                    alt={`${userData.person.name}'s profile`}
                    src={userData.person.picture}
                    sx={{ width: 100, height: 100 }}
                />
            </div>
            <h1>{userData.person.name}</h1>
            <Card className='card' sx={{ minWidth: 275, backgroundColor: 'black', padding: '10px', borderRadius: '20px', margin: '1em' }}>
            <Typography variant="h5" component="div" sx={{ color: 'white', textAlign: 'center' }}>
                Skills & Interests
            </Typography>
            <CardContent>
                {Object.entries(skillsByProficiency).map(([proficiency, skills]) => (
                    <div key={proficiency}>
                        <Typography
                            sx={{ mb: 1.5, color: 'white', fontWeight: 'bold',  display:'flex', alignItems: 'center', gap: '5px'}}
                            color="text.secondary"
                        >
                        {proficiencyIcons[proficiency]} {capitalizeFirstLetter(proficiency)}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 14, color: 'rgba(255, 255, 255, 0.8)',
                                display: 'flex', flexWrap: 'wrap', gap: '0.5em',
                                '& li': {
                                    listStyle: 'none',
                                    transition: 'font-size 0.3s, color 0.3s'
                                },
                            }}
                            color="text.secondary"
                            gutterBottom
                        >
                            {skills.map(skill => (
                                <Chip key={skill.id} label= {skill.name} component={'span'} variant='outlined' onClick={handleClick}
                                sx={{
                                    color: 'grey',
                                    fontSize: '12px', 
                                    transition: 'color 0.3s, font-size 0.3s',
                                    marginBottom: '0.5em', // Soft transition
                                    '&:hover': {
                                        color: 'white',
                                        fontSize: '13px',
                                    },
                                    '&:active': {
                                        color: 'blue', // Change the color when clicking
                                    },
                                    }}>      
                                </Chip>
                            ))}
                        </Typography>
                    </div>
                ))}
            </CardContent>
        </Card>

        </div>
    );
};

export default UserCard;