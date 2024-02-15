import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { CheckCircle, UploadFile } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';


export default function FileUpload({ onFileSelect, image, accept,getBase64Data,removedFile }) {
  const [fileStatus, setFileStatus] = useState(false)
  const { getRootProps, getInputProps } = useDropzone({
    accept: accept ? accept : {'image/*' : ['.png','.jpeg','.jpg']},
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFileStatus(true)
      onFileSelect && onFileSelect({ files: acceptedFiles })
      // console.log(acceptedFiles[0]);
      getBase64(acceptedFiles[0],(result)=>{
        getBase64Data && getBase64Data(result)
      })
    }
  });

  useEffect(() => {
    if (removedFile) {
      setFileStatus(false)
    }
  }, [removedFile])
  

  const getBase64= (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

  return (
    <Stack
      spacing={1}
      padding={fileStatus ? 3 : 5}
      direction="column"
      sx={{
        backgroundColor: 'secondary.lightGray',
        backgroundImage: image && `url("${image}")`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        boxShadow: 3,
        width: '100%',
        height: '100%',
        borderRadius: '10px', border: '3px dashed #fff6',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      {...getRootProps({})}
    >
      <input {...getInputProps({})} accept={accept ? accept : ''} />
      {fileStatus ? <CheckCircle sx={{ color: 'success.main', fontSize: 58 }} /> : <UploadFile sx={{ fontSize: '26px', color: 'secondary.contrastText' }} />}
      <Typography variant="caption" color={'secondary.contrastText'}>
        {fileStatus ? 'selected' : 'Drop your files or browse'}
      </Typography>
    </Stack>
  );
}