import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import StyledDivider from "../ui/styledDivider";
import StyledInput from "../ui/styledInput";
import { MailOutline, Lock, Visibility } from "@mui/icons-material";
import StyledButton from "../ui/styledButton";
import { Controller, useForm } from "react-hook-form";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Stack sx={{ backgroundColor: "secondary.main", borderRadius: "10px" }} py={2} my={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Logo
              sx={{
                height: 60,
                width: 60,
              }}
            />
            <StyledDivider />
          </Box>
          <Box p={2}>
            <Typography sx={{ marginBottom: 1, fontSize: "24px", fontWeight: "600" }}>
              Sign In
            </Typography>
            <Typography
              sx={{
                marginBottom: 4,
                fontSize: "14px",
                fontWeight: "400",
                color: "primary.DimText",
              }}
            >
              Login to your account to continue the process
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledInput
                        {...field}
                        icon={<MailOutline />}
                        placeholder={"Enter your email"}
                      />
                      {errors.email && (
                        <span style={errorMessageStyle}>{errors.email.message}</span>
                      )}
                    </>
                  )}
                  rules={{ required: "Email is required" }}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledInput
                        {...field}
                        icon={<Lock />}
                        iconright={
                          <Visibility
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: "pointer" }}
                          />
                        }
                        type={showPassword ? "text" : "password"}
                        placeholder={"Enter your password"}
                      />
                      {errors.email && (
                        <span style={errorMessageStyle}>{errors.password.message}</span>
                      )}
                    </>
                  )}
                  rules={{ required: "Password is required" }}
                />
                <StyledButton variant={"primary"} width="100%" type="submit">
                  Sign in
                </StyledButton>
                <Typography
                  sx={{
                    marginBottom: 4,
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#2D9CDB",
                  }}
                >
                  Forgot Your Password?
                </Typography>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

const errorMessageStyle = {
  color: "#D25B5B",
};
