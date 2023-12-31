import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import StyledSelectField from "../../../ui/styledSelectField";
import InputField from "../../../ui/styledInput";
import StyledButton from "../../../ui/styledButton";
import StyledStatusChip from "../../../ui/styledStatusChip";
import NotificationUpload from "../../../utils/NotificationUpload";
import ProgressBar from "../../../ui/ProgressBar";
export default function EmailNotification() {
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const handleFileSelect = (fileName, percentage) => {
    setSelectedFileName(fileName);
    setUploadPercentage(percentage);
  };
  const user_name = "username";
  return (
    <Box
      sx={{
        overflowX: "auto",
        borderRadius: "8px",
        margin: "20px 16px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack direction={"column"} spacing={2}>
        <Box sx={BoxStyle}>
          <Typography sx={HeadingStyle}>Create Email</Typography>

          <Typography sx={TextStyle}>Send To</Typography>
          <StyledSelectField placeholder={"Select User"} />
          <Typography sx={TextStyle}>Subject</Typography>
          <InputField placeholder={"Enter Subject line"} />
          <Typography sx={TextStyle}>Content</Typography>
          <InputField
            placeholder={"Add message"}
            lineHeight="173px"
            specialAlign={true}
          />
          <StyledStatusChip
            $status="INACTIVE"
            style={{ alignSelf: "flex-start", fontSize: "14px" }}
          >
            {user_name}
          </StyledStatusChip>
          <Typography sx={TextStyle}>Target Url</Typography>
          <InputField placeholder={"Enter Target URL"} />

          <NotificationUpload onFileSelect={handleFileSelect} />
          {selectedFileName && ( <ProgressBar
                UploadProgress={uploadPercentage}
                filename={selectedFileName}
              />  )}
          <StyledButton
            variant={"primary"}
            width="316"
            height="46"
            style={{ borderRadius: "8px" }}
          ></StyledButton>
        </Box>
      </Stack>
    </Box>
  );
}
const TextStyle = {
  color: "var(--white, #F7F8FC)",
  textAlign: "start",
  width: "100%",
  fontFamily: "Inter",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  letterSpacing: "0.3px",
  textTransform: "capitalize",
};
const BoxStyle = {
  display: "flex",
  padding: "30px 20px",
  flexDirection: "column",
  alignItems: "center",
  gap: "17px",
  borderRadius: "var(--borderRadius, 4px)",
  background: "#1c1d22",
  width: "356x",
};

const HeadingStyle = {
  color: "var(--Grey, #B5B8C5)",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  letterSpacing: "0.3px",
};
