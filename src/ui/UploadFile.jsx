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

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (acceptedFiles) => {
      onFileSelect(acceptedFiles[0])
    }
  });

  return (
    <FileContainer {...getRootProps({})}>
      <label htmlFor="fileInput">
        <div>
          <UploadIcon />
        </div>
        
      </label>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#fff', alignItems: 'center', fontWeight: 300 }}>
        <span>Drop your file here to upload</span>
        <span>or select from storage</span>
      </div>
      <input
        style={{display:'none'}}
          {...getInputProps({})}
        />

    </FileContainer>

  );
};

export default UploadFile;