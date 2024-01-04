import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import StyledSelectField from "../../../ui/styledSelectField";
import InputField from "../../../ui/styledInput";
import StyledButton from "../../../ui/styledButton";
import NotificationUpload from "../../../utils/NotificationUpload";
import ProgressBar from "../../../ui/ProgressBar";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";

const LocalStyledStatusChip = styled.span`
  padding: 4px 8px;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  text-align: center;
  display: inline-block;
  min-width: 60px;
  border-radius: 45px;
  background: var(--Secondary, #322f3b);
`;
export default function EmailNotification() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
    setValue,
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    clearErrors();

    setUploadPercentage(0);
    reset();
    window.location.reload();
  };
  const selectedFileName = watch("file");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const handleFileSelect = (fileName, percentage) => {
    setValue("file", fileName);
    setUploadPercentage(percentage);
  };
  const user_name = "username";
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              name="sendTo"
              control={control}
              render={({ field }) => (
                <>
                  <StyledSelectField placeholder={"Select User"} {...field} />
                  {errors.sendTo && (
                    <span style={errorMessageStyle}>
                      {errors.sendTo.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "User is required" }}
            />
            <Typography sx={TextStyle}>Subject</Typography>
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <>
                  <InputField placeholder={"Enter Subject line"} {...field} />
                  {errors.subject && (
                    <span style={errorMessageStyle}>
                      {errors.subject.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Subject is required" }}
            />
            <Typography sx={TextStyle}>Content</Typography>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <>
                  <InputField
                    placeholder={"Add message"}
                    lineHeight="173px"
                    specialAlign={true}
                    {...field}
                  />{" "}
                  {errors.content && (
                    <span style={errorMessageStyle}>
                      {errors.content.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Content is required" }}
            />
            <LocalStyledStatusChip
              style={{ alignSelf: "flex-start", fontSize: "14px" }}
            >
              {"{" + user_name + "}"}
            </LocalStyledStatusChip>
            <Typography sx={TextStyle}>Target Url</Typography>
            <Controller
              name="targetUrl"
              control={control}
              render={({ field }) => (
                <>
                  <InputField placeholder={"Enter Target URL"} {...field} />
                  {errors.targetUrl && (
                    <span style={errorMessageStyle}>
                      {errors.targetUrl.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Target Url is required" }}
            />
            <Controller
              name="file"
              control={control}
              render={({ field }) => (
                <>
                  <NotificationUpload
                    onFileSelect={handleFileSelect}
                    {...field}
                  />
                  {errors.file && (
                    <span style={errorMessageStyle}>{errors.file.message}</span>
                  )}
                </>
              )}
              rules={{ required: "file is required" }}
            />
            {selectedFileName && (
              <ProgressBar
                UploadProgress={uploadPercentage}
                filename={selectedFileName}
              />
            )}
            <StyledButton
            type="submit"
              variant={"primary"}
              width="316"
              height="46"
              style={{ borderRadius: "8px" }}
            ></StyledButton>
          </Box>
        </Stack>
      </Box>
    </form>
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
const errorMessageStyle = {
  color: "red",
};
