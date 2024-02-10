import { Stack } from "@mui/material";

const StyledIconButton = ({ icon, ...props }) => {
    return (
        <Stack sx={{ backgroundColor: '#322F3B', px: 2, justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }} props>
            {icon && icon}
        </Stack>
    )
}
export default StyledIconButton;