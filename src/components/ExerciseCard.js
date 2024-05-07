import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginBottom: '20px' }}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={{ marginRight: '20px', width: '200px', height: 'auto' }} />
    <div>
      <Stack direction="row" spacing={1}>
        <Button sx={{ color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' }, textTransform: 'capitalize' }}>
        {exercise.name}
      </Typography>
    </div>
  </Link>
);

export default ExerciseCard;
