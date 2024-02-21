import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { Stack, Typography } from '@mui/material';
import { ReactComponent as OutlineIcon } from '../assets/icons/AdjustmentsOutline.svg'
import { Close } from '@mui/icons-material';
import StyledIconButton from './stylediconButton';

export default function RightDrawer({ children }) {
  const [state, setState] = React.useState(false);
  const anchor = 'right';

  return (
    <div style={{ display: 'inline-flex' }}>
      <React.Fragment key={anchor}>
        <StyledIconButton onClick={() => setState(true)} 
        style={{ color: '#fff', border: 'none', backgroundColor: 'secondary.contrastText' }} 
        icon={<OutlineIcon style={{ color: 'secondary.contrastText' }} />} />
        <Drawer
          anchor={anchor}
          open={state}
          onClose={() => setState(false)}
          PaperProps={{
            sx: {
              backgroundColor: 'primary.main'
            }
          }}
        >
          <Stack direction={'row'} sx={{ p: 2, backgroundColor: 'secondary.main', justifyContent: 'space-between' }}>
            <Typography variant='h6' color={'secondary.contrastText'}>Filter</Typography>
            <Close sx={{ cursor: 'pointer', color: 'secondary.contrastText' }} onClick={() => { setState(false) }} />
          </Stack>
          {children}
          {/* <FilterNetwork /> */}
        </Drawer>
      </React.Fragment>

    </div>
  );
}