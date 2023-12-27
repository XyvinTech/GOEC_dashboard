import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadFile } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const getBase64 = (file) => {
  console.log('');
  return new Promise((resolve) => {
    // Make new FileReader
    const reader = new FileReader();
    // Convert the file to base64 text
    reader.readAsDataURL(file);
    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      // console.log('Called', reader);
      let baseURL = '';
      baseURL = reader.result;
      // console.log(baseURL);
      resolve(baseURL);
    };
  });
};

export default function FileUpload(getProps) {
  const [imgbase64, setimgbase64] = useState('');
  const [image, setimage] = useState([]);
  const [imageDetails, setImageDetails] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: (acceptedFiles) => {
      setimage([acceptedFiles[0]]);
      getBase64(acceptedFiles[0]).then((result) => {
        setimgbase64(result);
        setImageDetails([
          {
            base64: result,
            type: acceptedFiles[0].type,
            name: acceptedFiles[0].name,
            size: acceptedFiles[0].size
          }
        ]);
      });
    }
  });
  imageDetails.map((details) => getProps.callback(details));
  useEffect(() => {
    setimgbase64(getProps.update ? getProps.cover : '');
    setimage(getProps.update ? [{ name: getProps.name }] : []);
    setImageDetails(() => {
      if (getProps.update) {
        return [
          {
            base64: getProps.cover,
            type: 'image/png',
            name: getProps.name
          }
        ];
      }
      return [];
    });
  }, []);
  const thumbs = image.map((file) => (
    <Box justifyContent="center" key={file.name} sx={{ paddingLeft: '15%', paddingRight: '15%' }}>
      <img src={imgbase64} alt={file.name} />
    </Box>
  ));
  return (
    <Grid
      container
      spacing={0}
      padding={5}
      align="center"
      justify="center"
      direction="column"
      sx={{ boxShadow: 3, borderRadius: 2 }}
      {...getRootProps({})}
    >
      <input {...getInputProps({})} />
      <Box>
        <UploadFile style={{ fontSize: '24px' }} />
      </Box>
     
      <Typography variant="caption" gutterBottom>
        Drop your files or browse
      </Typography>
      <aside> {thumbs} </aside>
    </Grid>
  );
}