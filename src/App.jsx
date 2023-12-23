import React from "react";
import StyledButton from "./ui/styledButton";
import InputWithIcon from "./ui/styledInput";
import StyledBadge from "./ui/styledBadge";
import { ReactComponent as SmsIcon } from "./assets/icons/sms.svg";
import { ReactComponent as LockIcon } from "./assets/icons/lock.svg";
import { ReactComponent as EyeIcon } from "./assets/icons/eye-slash.svg";
import "./App.css";

export default function App() {
  return (
    <div>
      Hi
      <br />
      <StyledButton variant="primary">Sign in</StyledButton>
      <br />
      <StyledButton variant="secondary">Sign in</StyledButton>
      <br />
      <StyledBadge >Sign out</StyledBadge> 
      <InputWithIcon icon={<SmsIcon />} placeholder="Enter your email" />
      <br />
      <InputWithIcon
        icon={<LockIcon />}
        placeholder="Enter your password"
        iconright={<EyeIcon />}
      />
    </div>
  );
}
