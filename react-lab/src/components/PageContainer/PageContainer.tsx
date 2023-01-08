import React, { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Card from 'components/Card';
import { ICard } from 'types/card';
import { Box, Grid } from '@mui/material';
import Search from 'components/Search';

import classes from './PageContainer.module.scss';

const PageContainer: FC = () => {
  const loader = useLoaderData() as ICard[];

  return (
    <div className={classes.wrapper_content}>
      <Header />
      <main className={classes.centered}>
        <Box className={classes.main_content}>
          <Search />
          <Grid className={classes.cards} container spacing={3}>
            {loader.map((card) => (
              <Grid item xs={3}>
                <Card card={card} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default PageContainer;
