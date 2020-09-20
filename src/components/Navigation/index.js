import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './styles';

import { selectIndex } from '../../states';


const Navigation = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { dashboard } = useSelector(response => response);
  const { selectedIndex } = dashboard;

  const handleListItemClick = (event, index) => {
    dispatch(selectIndex(index));
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="Account Summary" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Benificiery Details" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Fund Transfer" />
        </ListItem>
      </List>
    </div>
  );
}

export default Navigation;