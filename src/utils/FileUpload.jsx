import React from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadFile } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';


export default function FileUpload({ onFileSelect }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
      onFileSelect && onFileSelect({ files: acceptedFiles })
    }
  });
  return (
    <Stack
      spacing={1}
      padding={5}
      direction="column"
      sx={{
        backgroundColor: 'secondary.lightGray',
        boxShadow: 3,
        width: '100%',
        height: '100%',
        borderRadius: '10px', border: '3px dashed #fff6',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      {...getRootProps({})}
    >
      <input {...getInputProps({})} />
      <UploadFile sx={{ fontSize: '24px', color: 'secondary.contrastText' }} />
      <Typography variant="caption" color={'secondary.contrastText'}>
        Drop your files or browse
      </Typography>
    </Stack>
  );
}