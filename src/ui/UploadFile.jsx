import React, { useState } from 'react';
import { ReactComponent as UploadIcon } from '../assets/icons/Group 37.svg'
import styled from 'styled-components';

const FileContainer = styled.div`
display: flex;
width: 100%;
padding: 25px 111px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: var(--borderRadius, 4px);
border: 1px dashed var(--White-20, rgba(255, 255, 255, 0.20));
background: var(--Field-inner, #39383D);
`;


const UploadFile = ({ onFileSelect }) => {
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
      //onFileSelect(file.name, 100);
      onFileSelect([file],100);
    }
  };

  return (
    <FileContainer>
      <label htmlFor="fileInput">
        <div>
          <UploadIcon/>
        </div>
        <input
          type="file"
          id="fileInput"
          accept=".pdf, .doc, .docx, .zip,.csv" // Specify accepted file types if needed
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </label>
        <div>
          Drop your file here to upload
          <br />
          or select from storage
        </div>
     
      
    </FileContainer>
   
  );
};

export default UploadFile;