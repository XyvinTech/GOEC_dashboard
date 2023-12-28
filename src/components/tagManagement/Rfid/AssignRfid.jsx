import styled from "styled-components";
import {
    Box,
  ButtonBase,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import { ReactComponent as ReloadIcon } from '../../../assets/icons/reload.svg'
import { ReactComponent as UserIcon } from '../../../assets/icons/Frame 42744.svg'
import { ReactComponent as Refresh } from '../../../assets/icons/autorenew.svg'
import StyledDivider from "../../../ui/styledDivider";
import StyledFooter from "../../../ui/StyledFooter";
import StyledPhoneNumber from "../../../ui/StyledPhoneNumber";

const AssignRfid = () => {
   
    const handlePhoneNumberChange = (e) => {
        // Handle phone number input logic here
        console.log(e.target.value);
      };

  return (
    <>
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'primary.grey',
          p: 2,
          m:2
        }}>
        <Stack direction={'column'} sx={{ ml: 2 }}>
          <Typography variant='body1' sx={{ color: 'secondary.contrastText' }}>RFID CArds</Typography>
          <Stack direction={'row'} spacing={1}>
            <Typography sx={{ color: 'secondary.greytext', fontSize: 12 }}>Last synced</Typography>
            <Typography sx={{ color: 'success.main', fontSize: 12 }}>4 minutes ago</Typography>
            <ReloadIcon style={{ cursor: 'pointer' }} />
          </Stack>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
       
      </Box>
    <TableContainer>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
            
                <Grid item xs={12} sm container spacing={6}>
                    <Grid item   xs={6} md={6}>
                        <Grid item xs={12} md={12}>
                            <Typography sx={{  mt: 3,mb:1 }}>Type</Typography>
                            <Stack direction="column">
                                <StyledSelectField placeholder={"Personal"} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography sx={{  mt: 1,mb:1  }}>Phone number</Typography>
                            <Grid container spacing={2} item xs={12} md={12}>
                                <Grid item xs={12} md={9}>
                                    {/* <InputField placeholder={"Enter Phone number"} /> */}
                                    <StyledPhoneNumber onChange={handlePhoneNumberChange}  placeholder="Enter Phone number" />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <StyledButton variant='gray' width='121' height='56'>Verify</StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} sx={{  mt: 3  }}>
                            <Stack direction="column">
                                <InputField placeholder={"Anish Vinkede"} icon={<UserIcon/>} iconright={<Refresh/>}/>
                            </Stack>
                        </Grid>

                    </Grid>
                    <Grid item xs={6} md={6}>
                    
                        <Grid item xs={12} md={12}>
                            <Typography sx={{  mt: 3,mb:1 }}>RFID</Typography>
                            <Stack direction="column">
                                <StyledSelectField placeholder={"Choose RFID"} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm container spacing={1}>
                            <Grid item xs={12} md={12}>
                                <Typography sx={{  mt: 3,mb:1 }}>Assigned RFID</Typography>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#39383D',pt:0 }}>
                                    <ListItem sx={{ pb:0 }}>
                                        <ListItemText primary="RFID Tag" secondary="04238ECAF10F90" />
                                    </ListItem>
                                    <StyledDivider/>
                                    <ListItem sx={{ pt:0,pb:0 }}>
                                        <ListItemText primary="RFID Serial No." secondary="04238ECAF10F90" />
                                    </ListItem>
                                    <StyledDivider/>
                                    <ListItem sx={{ pt:0,pb:0 }}>
                                        <ListItemText primary="RFID Type" secondary="Personal" />
                                    </ListItem>
                                    <StyledDivider/>
                                    <Box display="flex" justifyContent="center">
                                        <StyledButton variant='primary' width='90' height='27'>Unassign</StyledButton>
                                    </Box>
                                </List>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#39383D',pt:0 }}>
                                    <ListItem sx={{ pb:0 }}>
                                        <ListItemText primary="RFID Tag" secondary="04238ECAF10F90" />
                                    </ListItem>
                                    <StyledDivider/>
                                    <ListItem sx={{ pt:0,pb:0 }}>
                                        <ListItemText primary="RFID Serial No." secondary="04238ECAF10F90" />
                                    </ListItem>
                                    <StyledDivider/>
                                    <ListItem sx={{ pt:0,pb:0 }}>
                                        <ListItemText primary="RFID Type" secondary="Personal" />
                                    </ListItem>
                                    <StyledDivider/>
                                    <Box display="flex" justifyContent="center">
                                        <StyledButton variant='primary' width='90' height='27'>Unassign</StyledButton>
                                    </Box>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}  sx={{pr:4,mt:4}}>
                <StyledFooter width='100'>
                    <StyledButton variant={"gray"} width="103"  mr="20" > Cancel </StyledButton>

                    <StyledButton variant={"primary"}  width="160" > Assign </StyledButton>
                </StyledFooter>
                </Grid>
            </Grid>
        </Container>
    </TableContainer>
  </>
  )
}

export default AssignRfid

//! STYLINGS

// Styled action cell

// Styled table container
export const TableContainer = styled.div`
  background: #1C1D22; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners
  margin: 20px 16px; // Margin for spacing, adjust as needed
`;
