import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledSelectField from "../../../ui/styledSelectField";
import InputField from "../../../ui/styledInput";
import StyledButton from "../../../ui/styledButton";
import NotificationUpload from "../../../utils/NotificationUpload";
import ProgressBar from "../../../ui/ProgressBar";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { userSuggetionlist } from "../../../services/userApi";

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


const user_name = "username";
const user = [
  { value: "Anish Vikend", label: "Anish Vikend" },
  { value: "Anish Viken", label: "Anish Viken" },
  { value: "Anish Vike", label: "Anish Vike" },
  { value: "Anish Vik", label: "Anish Vik" },
  { value: "Anish Vi", label: "Anish Vi" },
  { value: "Anish V", label: "Anish V" },
  { value: "Anis", label: "Anis" },
  { value: "Ani", label: "Ani" },
  { value: "An", label: "An" },
  { value: "A", label: "A" },
];

export default function EmailNotification() {
  const [userOptions,setUserOption] = useState([])
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
    setValue,
    watch,
  } = useForm({
    // defaultValues:{
    //   sendTo: user
    // }
  });
  const onSubmit = (data) => {
    console.log(data);
    clearErrors();

    setUploadPercentage(0);
    reset();
  };
  const selectedFileName = watch("file");
  
  const handleFileSelect = (fileName, percentage) => {
    setValue("file", fileName);
    setUploadPercentage(percentage);
  };

  useEffect(() => {
    userSuggetionlist('').then((res)=>{
      console.log(res);
      if(res.status){
        setUserOption(res.result.map((dt)=>({label:dt.username,value:dt.email})))
      }
    })
  }, [])
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          borderRadius: "8px",
          px: { md: 30, xs: 2 },
          py: 2,
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
                  <StyledSelectField options={[{ value: "*", label: "All" }, ...userOptions]}
                    {...field}
                    placeholder={"Select User"}
                    isMulti={true} isSearchable={true}
                    onChange={(v, e) => {
                      if (e.action === 'select-option') {
                        if (e.option.value === '*') {
                          setValue("sendTo", userOptions)
                        } else {
                          setValue("sendTo", v)
                        }
                      } else if (e.action === 'remove-value') {
                        if (e.removedValue.value === '*') {
                          setValue("sendTo", [])
                        } else {
                          setValue("sendTo", v)
                        }
                      }
                      else if (e.action === 'clear') {
                        setValue("sendTo", [])
                      }
                    }

                    }
                    height={'55px'}

                  />
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
