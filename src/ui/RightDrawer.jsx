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
import { Button, Stack, Typography } from '@mui/material';
import { ReactComponent as OutlineIcon } from '../assets/icons/AdjustmentsOutline.svg'
import StyledButton from './styledButton';
import { Close } from '@mui/icons-material';

export default function RightDrawer({ children }) {
  const [state, setState] = React.useState(false);
  const anchor = 'right';

  return (
    <div style={{ display: 'inline-flex' }}>

      <React.Fragment key={anchor}>
        <StyledButton variant="secondary" width='65' onClick={()=>setState(true)} style={{ color: '#fff',border:'none',backgroundColor:'secondary.button' }}><OutlineIcon /></StyledButton>
        <Drawer
          anchor={anchor}
          open={state}
          onClose={()=>setState(false)}
          PaperProps={{
            sx: {
              backgroundColor: 'primary.main'
            }
          }}
        >
          <Stack direction={'row'} sx={{p:2,backgroundColor:'secondary.main',justifyContent:'space-between'}}>
            <Typography variant='h6' color={'secondary.contrastText'}>Filter</Typography>
            <Close sx={{cursor:'pointer',color:'secondary.contrastText'}} onClick={()=>{setState(false)}}/>
          </Stack>
          {children}
          {/* <FilterNetwork /> */}
        </Drawer>
      </React.Fragment>

    </div>
  );
}