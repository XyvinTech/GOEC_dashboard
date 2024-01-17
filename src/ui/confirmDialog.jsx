import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import StyledButton from './styledButton';
import { Close } from '@mui/icons-material';

const ConfirmDialog = ({ open=false, onClose, title="Action", subtitle="Action Takes", buttonText = 'Confirm',confirmButtonHandle, ...props }) => {
  return (
    <Dialog open={open} maxWidth="sm" fullWidth >
      <Box sx={{backgroundColor:'primary.main'}}>
        <DialogTitle color={'secondary.contrastText'}>{title}</DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={onClose && onClose}>
            <Close />
          </IconButton>
        </Box>
        <DialogContent>
          <Typography color={"white"}>{subtitle}</Typography>
        </DialogContent>
        <DialogActions>
          <StyledButton variant="secondary" style={{ width: '100px', height: '40px' }} onClick={onClose && onClose}>cancel</StyledButton>
          <StyledButton variant="primary" style={{ width: '120px', height: '40px' }} onClick={()=>{confirmButtonHandle && confirmButtonHandle(); onClose && onClose()}}>{buttonText}</StyledButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ConfirmDialog;