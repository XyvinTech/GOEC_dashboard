import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import StyledSelectField from "../../../ui/styledSelectField";
import InputField from "../../../ui/styledInput";
import StyledButton from "../../../ui/styledButton";
import ProgressBar from "../../../ui/ProgressBar";
import { Controller, useForm } from "react-hook-form";
import { userSuggetionlist } from "../../../services/userApi";
import FileUpload from "../../../utils/FileUpload";
import StyledTextArea from "../../../ui/styledTextArea";
import { toast } from "react-toastify";
import { sendBulkMail } from "../../../services/notificationAPI";

// const LocalStyledStatusChip = styled.span`
//   padding: 4px 8px;
//   border-radius: 10px;
//   color: white;
//   font-weight: 500;
//   text-align: center;
//   display: inline-block;
//   min-width: 60px;
//   border-radius: 45px;
//   background: var(--Secondary, #322f3b);
// `;


// const user_name = "username";

export default function EmailNotification() {
  const [userOptions, setUserOption] = useState([])
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [selectedFile, setSelectedFile] = useState();
  const reference = useRef();
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
    if (!selectedFile) {
      toast.error("selectFile")
    }
    const mails = data.sendTo.map((dt)=>(dt.value)).toString()
    const formData = new FormData()
    formData.append("to",mails)
    formData.append("subject",data.subject)
    formData.append("text",data.content)
    formData.append("file",selectedFile)
    sendBulkMail(formData).then((res)=>{
      console.log(res);
      toast.success("Send successfully")
    }).catch((error)=>{
      console.error(error);
    })
  };

  const handleFileSelect = (file) => {
    console.log(file.files[0]);
    setSelectedFile(file.files[0])
    let i = 0;
    let st = setInterval(() => {
      if (i === 90) {
        clearInterval(st)
      }
      i = i + 10
      setUploadPercentage(i);
    }, 40);
  };

  useEffect(() => {
    userSuggetionlist('').then((res) => {
      console.log(res);
      if (res.status) {
        setUserOption(res.result.map((dt) => ({ label: dt.username, value: dt.email })))
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
                  <StyledTextArea
                    placeholder={"Add message"}
                    height={'153px'}
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
            {/* <LocalStyledStatusChip
              style={{ alignSelf: "flex-start", fontSize: "14px" }}
            >
              {"{" + user_name + "}"}
            </LocalStyledStatusChip> */}
            {/* <Typography sx={TextStyle}>Target Url</Typography>
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
            /> */}
            <FileUpload
              ref={reference}
              accept={'*'}
              removedFile={selectedFile ? false : true}
              onFileSelect={handleFileSelect}
            />
            {selectedFile && (
              <ProgressBar
                UploadProgress={uploadPercentage}
                filename={selectedFile.name}
                onClose={() => { setSelectedFile(); console.log(reference); }}
              />
            )}
            <StyledButton
              type="submit"
              variant={"primary"}
              width="316"
              height="46"
              style={{ borderRadius: "8px" }}
            >Send</StyledButton>
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
