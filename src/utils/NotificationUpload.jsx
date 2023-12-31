import { Typography } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import { UploadFile } from '@mui/icons-material';
const FileContainer =styled.div`
display: flex;
width:316px;
height:111px;
padding: 11px 20px;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: var(--borderRadius, 4px);
border: 1px dashed var(--White-20, rgba(255, 255, 255, 0.20));
background: var(--Field-inner, #39383D);
`;
const NotificationUpload = ({ onFileSelect }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadPercentage, setUploadPercentage] = useState(0);
   
    const handleFileChange = async (event) => {
      const file = event.target.files[0];
  
      if (file) {
        setSelectedFile(file);
  
        // Simulate file upload with a delay and update the percentage
        for (let i = 0; i <= 100; i += 10) {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setUploadPercentage(i);
        }
  
        // Invoke the callback function from the parent with the file name and upload percentage
        onFileSelect(file.name, 100);
      }
    };
  return (
    <FileContainer>
         <label htmlFor="fileInput">
          <input
          type="file"
          id="fileInput"
          accept=".pdf, .doc, .docx, .zip" // Specify accepted file types if needed
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <UploadFile style={{ fontSize: '24px' }} />
    
        </label>
     
      <Typography variant="caption" gutterBottom>
        Drop your files or browse
      </Typography>
      
    </FileContainer>
  )
}

export default NotificationUpload
