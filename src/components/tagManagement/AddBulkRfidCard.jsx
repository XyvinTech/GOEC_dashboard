import React, { useState } from 'react'
import CommonLayout from '../../layout/CommonLayout'
import { Grid, List, ListItem,  Typography } from '@mui/material'
import StyledFooter from '../../ui/StyledFooter';
import StyledButton from '../../ui/styledButton';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg'
import UploadFile from '../../ui/UploadFile';
import ProgressBar from '../../ui/ProgressBar';

const AddBulkRfidCard = () => {
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const handleFileSelect = (fileName, percentage) => {
    setSelectedFileName(fileName);
    setUploadPercentage(percentage);
  };
  return (
    <div id='layout'>
   
    <CommonLayout  header='Add bulk RFID Card' onClose='layout' >
      <Grid container spacing={2} direction="row" sx={{ pr:2, pl: 2 ,fontSize: '14px'}}>
        <Grid item xs={12} textAlign="left" display="flex" justifyContent="flex-start" sx={{ mb:2 }}>
          <UploadFile  onFileSelect={handleFileSelect}/>
        </Grid>
        <Grid item xs={6} textAlign="right" display="flex" justifyContent="flex-end">
          <StyledButton variant='gray' width='180' mr='20' fontSize='10'>Browse</StyledButton>
        </Grid>
        <Grid item xs={6} textAlign="left" display="flex" justifyContent="flex-start">
          <StyledButton variant='gray' width='180' mr='20' fontSize='10'><ArrowDown/>Download Sample</StyledButton> 
        </Grid>
        <Grid item xs={12} textAlign="left" display="flex" justifyContent="flex-start">
           {selectedFileName && (
            <ProgressBar UploadProgress={uploadPercentage} filename={selectedFileName} />
          )}
        </Grid>
        <Grid item xs={12} textAlign="left" display="flex" justifyContent="flex-start">
          <Typography align="left">Instructions for bulk import:</Typography> 
        </Grid>
        <Grid item xs={12} textAlign="left" display="flex" justifyContent="flex-start">
          <List
          sx={{
                listStyleType: 'disc',
                listStylePosition: 'inside',
                
              }}
            >
            <ListItem sx={{ display: 'list-item' }}>
            RFID Field is mandatory.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            If any value is not present, then please use hyphen ("-") rather than leaving it blank.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            Don't remove headers.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            Maximum of 50 entries allowed at a time.
            </ListItem>
          </List>
        </Grid>
    </Grid>
    </CommonLayout>
    <StyledFooter>
        <StyledButton variant='secondary' width='103' mr='20'>Cancel</StyledButton>
        <StyledButton variant='primary' width='160'>Upload</StyledButton>
      </StyledFooter>
    </div>
  )
}

export default AddBulkRfidCard
