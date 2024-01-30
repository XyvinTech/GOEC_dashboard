import React, { useState } from "react";
import CommonLayout from "../../../layout/CommonLayout";
import { Grid, List, ListItem, Typography } from "@mui/material";
import StyledFooter from "../../../ui/StyledFooter";
import StyledButton from "../../../ui/styledButton";
import { ReactComponent as ArrowDown } from "../../../assets/icons/arrow-down.svg";
import UploadFile from "../../../ui/UploadFile";
import ProgressBar from "../../../ui/ProgressBar";
import { useForm } from 'react-hook-form';
import { exportRFIDSampleFile } from "../../../utils/excelExport";

const AddBulkRfidCard = ({Close,Save}) => {

  const { register, handleSubmit, watch, setValue } = useForm();
  
  const selectedFile = watch('file'); // Watch the 'file' field

  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [selectedFileName, setselectedFileName] = useState(null);


  const handleFileSelect = (fileList, percentage) => {
    // console.log("filelist:", fileList);
    // console.log("length:", fileList.length);
  
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      // console.log("file is:", file);
  
      setValue('file', fileList); // Set the entire FileList object for the form
      setselectedFileName(file.name)
      let i = 5;
      const interval = setInterval(() => {
        i+=5
        if (i == 100) {
          clearInterval(interval)
        }
        setUploadPercentage(i);
      }, 500);
      
    } else {
      console.log("No file selected");
    }
  };

  const onSubmit = async (data) => {
    // Handle form submission here
    console.log('Form data submitted:',data);
  
    const fileList = data.file;
    // console.log("file input:", data.file);
  
    if (fileList && fileList.length > 0 ) {
      const fileInput = fileList[0];
  
      try {
        const fileData = await readFileAsText(fileInput);
        console.log('File Data:', fileData);
  
        // Extract the file name for display
        const fileName = fileInput.name;
        console.log('File Name:', fileName);
  
        // Now you can parse the CSV data
        const parsedData = parseCSV(fileData);
        console.log('Parsed Data:', parsedData);
      } catch (error) {
        console.error('Error reading file:', error);
      }
    } else {
      console.log("No file selected");
    }
  
    Close();
  };


  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(e);

      reader.readAsText(file);
    });
  };

  function parseCSV(csvData) {
    const rows = csvData.split('\n');
    const header = rows[0].split(',');
    const parsedData = [];
  
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(',');
      const entry = {};
  
      for (let j = 0; j < header.length; j++) {
        entry[header[j]] = rowData[j];
      }
  
      parsedData.push(entry);
    }
  
    return parsedData;
  }
  
  const handleBrowseClick = () => {
    // trigger file input click
    document.getElementById('fileInput').click();
  };


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <CommonLayout header="Add bulk RFID Card" onClick={Close}>
        <Grid
          container
          spacing={2}
          direction="row"
          sx={{ pr: 2, pl: 2, fontSize: "14px" }}
        >
          <Grid
            item
            xs={12}
            textAlign="left"
            display="flex"
            justifyContent="flex-start"
            sx={{ mb: 2 }}
          >
            <UploadFile onFileSelect={handleFileSelect} />
            <input
                type="file"
                id="fileInput"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                style={{ display: 'none' }}
                onChange={(e) => handleFileSelect(e.target.files, 0)}
                {...register('file')}
              />
          </Grid>
          <Grid
            item
            xs={6}
            textAlign="right"
            display="flex"
            justifyContent="flex-end"
          >
            <StyledButton variant="gray" width="180" mr="20" fontSize="10" type="button"
                 onClick={handleBrowseClick}>
              Browse
            </StyledButton>
          </Grid>
          <Grid
            item
            xs={6}
            textAlign="left"
            display="flex"
            justifyContent="flex-start"
          >
            <StyledButton variant="gray" width="180" mr="20" type="button" fontSize="10" onClick={exportRFIDSampleFile}>
              <ArrowDown />
              Download Sample
            </StyledButton>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign="left"
            display="flex"
            justifyContent="flex-start"
          >
            {selectedFileName && (
              <ProgressBar
                UploadProgress={uploadPercentage}
                filename={selectedFileName}
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            textAlign="left"
            display="flex"
            justifyContent="flex-start"
          >
            <Typography align="left" color={'secondary.contrastText'}>Instructions for bulk import:</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign="left"
            display="flex"
            justifyContent="flex-start"
          >
            <List
              sx={{
                listStyleType: "disc",
                listStylePosition: "inside",
              }}
              
            >
              <ListItem sx={{ display: "list-item",color:'secondary.contrastText',fontSize:12 }}>
                RFID Field is mandatory.
              </ListItem>
              <ListItem sx={{ display: "list-item",color:'secondary.contrastText' }}>
                If any value is not present, then please use hyphen ("-") rather than leaving it blank.
              </ListItem>
              <ListItem sx={{ display: "list-item",color:'secondary.contrastText' }}>
                Don't remove headers.
              </ListItem>
              <ListItem sx={{ display: "list-item",color:'secondary.contrastText' }}>
                Maximum of 50 entries allowed at a time.
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </CommonLayout>
      <StyledFooter width={100}>
        <StyledButton variant="secondary" width={'130'} style={{height:'50px'}}  mr="20" onClick={Close} type="button">
          Cancel
        </StyledButton>
        <StyledButton variant="primary" width={'150'} style={{height:'50px'}} type="submit">
          Upload
        </StyledButton>
      </StyledFooter>
      </form>
    </>
  );
};

export default AddBulkRfidCard;
