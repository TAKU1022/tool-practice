import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { VFC } from 'react';
import styles from './Header.module.scss';

const Header: VFC = () => {
  return (
    <Box className={styles.root}>
      <AppBar className={styles.app_bar} position="static">
        <Toolbar className={styles.tool_bar}>
          <Typography className={styles.title} variant="h6">
            Redux Toolkit Todo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
