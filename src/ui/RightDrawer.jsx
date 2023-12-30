import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FilterNetwork from '../components/chargingNetwork/FilterNetwork';
import { Button } from '@mui/material';
import { ReactComponent as OutlineIcon } from '../assets/icons/AdjustmentsOutline.svg'
import StyledButton from './styledButton';

export default function RightDrawer() {
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      const anchor = 'right';

  return (
    <div style={{display:'inline-flex'}}>
      
        <React.Fragment key={anchor}>
          <StyledButton variant="secondary" width='65' onClick={toggleDrawer(anchor, true)} style={{color:'#fff'}}><OutlineIcon/></StyledButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <FilterNetwork/>
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}