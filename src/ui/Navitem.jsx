import PropTypes from 'prop-types';
import { Box, Button, ListItem, Stack } from '@mui/material';
import { ReactComponent as ArrowDropdown } from '../assets/icons/arrow_drop_down.svg';

export const NavItem = (props) => {
    const { href, icon, title, sub, extendable, ...others } = props;
    let active = false;
    let activeIndex = -1;
    sub && sub.forEach((element,ind) => {
        if(window.location.pathname === element.href){
            active = true;
            activeIndex  = ind
            return
        }
    });
    // const active = href ? (window.location.pathname === href) : false;
    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                flexDirection: 'column',
                py: 0,
            }}
            {...others}
        >
            <Button
                component="a"
                startIcon={icon}
                endIcon={extendable ? <ArrowDropdown style={{fill:'#fff'}} /> :<></>}
                disableRipple
                sx={{
                    backgroundColor: active && '#000',
                    borderRadius: 0,
                    height: '50px',
                    color: active ? '#FFF' : 'secondary.contrastText',
                    fontWeight: '20px',
                    justifyContent: 'flex-start',
                    px: 3,
                    textAlign: 'left',
                    textTransform: 'none',
                    width: '100%',
                    '& .MuiButton-startIcon': {
                        color: active ? 'secondary.main' : 'neutral.400'
                    },
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255, 0.08)'
                    }
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    {title}
                </Box>
            </Button>
            {active &&
                <Box sx={{
                    backgroundColor: active && '#000',
                    width: '100%',
                }}>
                    <Stack
                        sx={{
                            margin: '10px 20px 15px 30px',
                            padding: '0px 0px 0px 10px',
                            borderLeft: 'solid 1px #4A4458'
                        }}>
                        {
                            active && sub && sub.map((item,index) => {
                                return (
                                    <Button sx={{
                                        backgroundColor: activeIndex == index ? 'secondary.button' : 'primary.button',
                                        borderRadius: 0.5,
                                        height: '35px',
                                        my: 1,
                                        justifyContent: "flex-start",
                                        color: active ? '#fff' : 'primary.contrastText',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255, 0.1)'
                                        }
                                    }}>
                                        {item.title}
                                    </Button>
                                )
                            })
                        }
                    </Stack>
                </Box>}
        </ListItem>
    );
};

NavItem.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string,
    sub: PropTypes.array
};
