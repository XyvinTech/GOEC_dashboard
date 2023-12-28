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
import { ReactComponent as UserIcon } from '../../../assets/icons/Frame 42744.svg'
import { ReactComponent as Refresh } from '../../../assets/icons/autorenew.svg'
import StyledFooter from "../../../ui/StyledFooter";
import StyledPhoneNumber from "../../../ui/StyledPhoneNumber";
import StyledList from "../../../ui/StyledList";
import LastSynced from '../../../layout/LastSynced'

const listdata = [
    { title: 'VID Tag', value: '04238ECAF10F90' },
    { title: 'VID Serial No.', value: '04238ECAF10F90' },
    { title: 'VID Type', value: 'Personal' },
  ];

const AssignVid = () => {
   
    const handlePhoneNumberChange = (e) => {
        // Handle phone number input logic here
        console.log(e.target.value);
      };

  return (
    <>
    <LastSynced heading="VID Cards"/>
    <TableContainer>
        <Container maxWidth="lg">
            <Grid container>
            
                <Grid item xs={12} sm container >
                    <Grid item   xs={12} md={6}>
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
                    <Grid item xs={12} md={6} sx={{ paddingLeft: { xs: 0, md: '30px' } }}>
                    
                        <Grid item xs={12} md={12}>
                            <Typography sx={{  mt: 3,mb:1 }}>VID</Typography>
                            <Stack direction="column">
                                <StyledSelectField placeholder={"Choose VID"} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm container spacing={1}>
                            <Grid item xs={12} md={12}>
                                <Typography sx={{  mt: 3,mb:1 }}>Assigned VID</Typography>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Box  justifyContent="center" sx={{ bgcolor: '#39383D', paddingBottom:'10px' }}>
                                    <StyledList data={listdata}/>
                                    <Box  justifyContent="center" display="flex">
                                        <StyledButton variant='primary' width='90' height='27'>Unassign</StyledButton>
                                    </Box>
                                    
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={6} >
                                <Box  justifyContent="center" sx={{ bgcolor: '#39383D', paddingBottom:'10px' }}>
                                    <StyledList data={listdata}/>
                                    <Box  justifyContent="center" display="flex">
                                        <StyledButton variant='primary' width='90' height='27'>Unassign</StyledButton>
                                    </Box>
                                    
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}  sx={{mt:4}}>
                <StyledFooter width='100' sx={{paddingRight:'0px'}}>
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

export default AssignVid

//! STYLINGS

// Styled action cell

// Styled table container
export const TableContainer = styled.div`
  background: #1C1D22; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners
  margin: 20px 16px; // Margin for spacing, adjust as needed
`;
