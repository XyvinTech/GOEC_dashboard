import React from 'react'
import StyledButton from './ui/CommonButton'
import InputWithIcon from './ui/CommonInput';
import { ReactComponent as SmsIcon } from './assets/icons/sms.svg'; 
import { ReactComponent as LockIcon } from './assets/icons/lock.svg'; 
import { ReactComponent as EyeIcon } from './assets/icons/eye-slash.svg'; 

export default function App() {
  const bgcolor='var(--Primary, linear-gradient(100deg, #ED5DCD -2.24%, rgba(95, 93, 215, 0.71) 98.06%))';
  const bgcolor2='var(--Selection, #4A4458);';

  return (
    <div>
      Hi
      <br/>
      <StyledButton background={bgcolor}>Sign in</StyledButton>
      <br/>
      <StyledButton background={bgcolor2} border="2px solid var(--White-20, rgba(255, 255, 255, 0.20));">Sign in</StyledButton>
      <br/>
      <InputWithIcon
        icon={<SmsIcon  />} 
        placeholder="Enter your email"
      />
      <br/>
      <InputWithIcon
        icon={<LockIcon  />} 
        placeholder="Enter your password"
        iconright={<EyeIcon  />} 
      />
    </div>
  )
}
