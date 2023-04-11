import { Typography } from '@mui/material';

export default function Instructions () {
  return (
    <div className="instructions">
        <Typography variant="h3">Tic Tac Toe</Typography>
        <Typography variant="subtitle1">Instructions:</Typography>
        <Typography variant="subtitle2">Two player game. On your turn, click a square. Be the first to get three in a row.</Typography>
    </div>
    
  )
}
