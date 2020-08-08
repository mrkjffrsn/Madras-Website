import React, { Components } from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { VideoLibrary, Event, Notifications } from '@material-ui/icons'
import './style.scss'

function MainNav( { items } ) {

  return (
    <Drawer className="drawer" variant="permanent" anchor="left">
      <List>
        {items.map((item, index) => (
          <ListItem button key={item.Title}>
            <ListItemIcon>
              <VideoLibrary />
            </ListItemIcon>
            <ListItemText primary={item.Title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

MainNav.propTypes = {
  items: PropTypes.array.isRequired
}

export default MainNav