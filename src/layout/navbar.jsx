import styled from '@emotion/styled';
import { AppBar, Avatar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactComponent as Notification} from '../assets/icons/notification.svg'
import { grey } from '@mui/material/colors';
import { useAuth } from '../core/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Icon } from '@mui/material';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  border:'none',
  boxShadow:'none'
}));

export const DashboardNavbar = (props) => {
  const { open,onSideBarOpen, ...other } = props;
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token'); 
   
    navigate('/login'); 
  };


  return (
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 260
          },
          width: {
            lg: 'calc(100% - 260px)'
          },
          border:'none'
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
            onClick={onSideBarOpen}
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

          <Stack direction={'row'} spacing={5}   sx={{ 
    pr: 2,
    mr: 2, 
  }}>

          <Typography sx={{
            color: 'primary.DimText'
          }} variant='subtitle2'> {user?.name || 'Guest'}</Typography>

          {/* <Avatar
                  sx={{
                    cursor: 'pointer',
                    height: 40,
                    width: 40,
                    ml: 1,
                    bgcolor: grey[500]
                  }}       
                        
                      >
                        
                      </Avatar> */}

                      <LogoutTwoToneIcon sx={{cursor:"pointer"}} onClick={logout}/>

                      </Stack>

        </Toolbar>
      </DashboardNavbarRoot>
  );
};

