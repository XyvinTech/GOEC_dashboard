import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactComponent as Notification} from '../assets/icons/notification.svg'
import { deepOrange, deepPurple, grey } from '@mui/material/colors';


const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 260
          },
          width: {
            lg: 'calc(100% - 260px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{paddingRight:'25px'}}>
          <Notification />
          </Box>
          <Typography sx={{
            color: 'primary.DimText'
          }} variant='subtitle2'>Jackie Chan</Typography>

          <Avatar
                  onClick={() => setOpenAccountPopover(true)}
                  ref={settingsRef}
                  sx={{
                    cursor: 'pointer',
                    height: 40,
                    width: 40,
                    ml: 1,
                    bgcolor: grey[500]
                  }}       
                        
                      >
                        
                      {/* { localStorage.getItem("username")?  getInitials(localStorage.getItem("username") ) : getInitials("Admin" )} */}
                      </Avatar>
          
        </Toolbar>
      </DashboardNavbarRoot>
    
    </>
  );
};

