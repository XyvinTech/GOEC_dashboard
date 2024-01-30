import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ReactComponent as DocumentTextIcon } from '../assets/icons/document-text.svg'
import { ReactComponent as EllipseIcon } from '../assets/icons/Ellipse 4.svg'
import { ReactComponent as CloseCircle } from '../assets/icons/close-circle.svg';

const ProgressContainer = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: var(--borderRadius, 4px);
  border: 1px solid var(--White-20, rgba(255, 255, 255, 0.20));
  background: var(--Field-inner, #39383D);
`;

const EllipseLayout = styled.div`
  position: relative;
`;

const IconLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FileNameLayout = styled.div`
    flex: 1 0 0;
    color: var(--white, #F7F8FC);
`;

const StyledProgress = styled.progress`
  width: 100%;
  appearance: none;
  height:5px;
  &::-webkit-progress-bar {
    background-color: #DFDFE6; /* Change this to the desired background color of the progress bar */
    border-radius: 4px;
  }

  &::-webkit-progress-value {
    background-color: #322F3B; /* Change this to the desired color of the filled part */
    border-radius: 4px;
  }

  &::-moz-progress-bar {
    background-color: #322F3B; /* Change this to the desired color for Firefox */
    border-radius: 4px;
  }
`;

const ProgressBarLayour = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
flex: 1 0 0;
`;
const ProgressInfo = styled.div`
display: flex;
align-items: center;
gap: 10px;
align-self: stretch;
`;
const ProgressNumber = styled.div`
width: 25px;
align-self: stretch;
color:#fff;
`;

const ProgressBar = ({ UploadProgress,filename,onClose }) => {
  
    return (
        <div style={{ width: '100%' }}>
          <ProgressContainer>
            <EllipseLayout>
              <EllipseIcon />
              <IconLayout>
                <DocumentTextIcon />
              </IconLayout>
            </EllipseLayout>
            <ProgressBarLayour>
                <ProgressInfo>
                    <FileNameLayout>{filename}</FileNameLayout> 
                    <ProgressNumber>{UploadProgress}%</ProgressNumber>
                </ProgressInfo>
                <StyledProgress value={UploadProgress} max="100" />
            </ProgressBarLayour>
            <CloseCircle style={{cursor:'pointer'}} onClick={onClose} />
          </ProgressContainer>
        </div>
      );
};

export default ProgressBar
