import React, { useState } from 'react';
import { ReactComponent as UploadIcon } from '../assets/icons/Group 37.svg'
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

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

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (acceptedFiles) => {
      handleFileChange({ target: {files:acceptedFiles} })
    }
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      setSelectedFile(file);
      console.log(file);
      // Invoke the callback function from the parent with the file name and upload percentage
      //onFileSelect(file.name, 100);
      onFileSelect([file]);
    }
  };

  return (
    <FileContainer {...getRootProps({})}>
      <label htmlFor="fileInput">
        <div>
          <UploadIcon />
        </div>
        <input
          type="file"
          id="fileInput"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" // Specify accepted file types if needed
          style={{ display: 'none' }}
          onChange={handleFileChange}
          {...getInputProps({})}
        />
      </label>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#fff', alignItems: 'center', fontWeight: 300 }}>
        <span>Drop your file here to upload</span>
        <span>or select from storage</span>
      </div>


    </FileContainer>

  );
};

export default UploadFile;