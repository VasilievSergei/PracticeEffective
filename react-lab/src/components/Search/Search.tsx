import React, { FC } from 'react';
import { TextField } from '@mui/material';

import classes from './Search.module.scss';

export const Search: FC = () => {
  return (
    <div className={classes.search}>
      <TextField className={classes.search_input} fullWidth />
      <button type="submit" className={classes.search_button}>
        Search
      </button>
    </div>
  );
};
