import { styled } from "@mui/material";
import Sidebar from "./sideBar";

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
        <><DashboardLayoutRoot>
            <Box
                sx={{
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    width: '100%'
                }}
            >
                {children}
            </Box>
        </DashboardLayoutRoot><Sidebar />
        </>
    )
}
export default DashboardLayout;