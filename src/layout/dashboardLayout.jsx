import { styled } from "@mui/material";
import Sidebar from "./sidebar";
import { DashboardNavbar } from "./navbar";
import { Box } from '@mui/material';


const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 260
    }
}));


const DashboardLayout = () => {
    return (
        <>
            <DashboardLayoutRoot>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar />
            <Sidebar />
        </>
    )
}
export default DashboardLayout;