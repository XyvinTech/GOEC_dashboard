import React, { useState } from "react";
import StyledTable from "./ui/styledTable";
import StyledButton from './ui/styledButton'
import InputWithIcon from './ui/styledInput';
import { ReactComponent as SmsIcon } from './assets/icons/sms.svg'; 
import { ReactComponent as LockIcon } from './assets/icons/lock.svg'; 
import { ReactComponent as EyeIcon } from './assets/icons/eye-slash.svg'; 
import LogLayout from './layout/CommonLayout';
import "./App.css";
import StyledBadge from "./ui/styledBadge";
import StyledAppBar from "./ui/styledAppBar";
import StyledDivider from "./ui/styledDivider";
import StyledSearchField from "./ui/styledSearchField";
import StyledSelectField from "./ui/styledSelectField";

export default function App() {

  // Example usage of DynamicTable
const headers = ['OCCP Txn ID', 'User Name', 'Charge Station Name', /* ... more headers */];

const data = [
  {
    'OCCP Txn ID': '23202911',
    'User Name': 'Avinash Nazeer',
    'Charge Station Name': 'GOEC Jansons Orchard Inn',
    // ... more key-value pairs for each row
  },
  {
    'OCCP Txn ID': '23202911',
    'User Name': 'Avinash Nazeer',
    'Charge Station Name': 'GOEC Jansons Orchard Inn',
    // ... more key-value pairs for each row
  },
  {
    'OCCP Txn ID': '23202911',
    'User Name': 'Avinash Nazeer',
    'Charge Station Name': 'GOEC Jansons Orchard Inn',
    // ... more key-value pairs for each row
  },
  // ... more rows
];

// for appbar
const username = 'Jackie Chan';
const avatarSrc = 'Photo.png';
const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

// for search
const [searchQuery, setSearchQuery] = useState('');

const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
};

const handleSearch = () => {
  // Handle the search action (e.g., send the searchQuery to the server)
  console.log('Searching for:', searchQuery);
};

// for selectfield
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];


  return (
    <div>
      {/* Appbar */}
      <StyledAppBar username={username} avatarSrc={avatarSrc} notifications={notifications}/>

      <StyledDivider />
      
     {/* InputField */}
      <InputWithIcon
          icon={<SmsIcon  />} 
          placeholder="Enter your email"
      />
      <InputWithIcon
          icon={<LockIcon  />} 
          placeholder="Enter your password"
          iconright={<EyeIcon  />} 
      />
      <InputWithIcon
          placeholder="Vendor" 
      />
      <StyledDivider />

      {/* Button */}
      <StyledButton variant='primary'>Sign in</StyledButton>
      <StyledButton variant='secondary'>Sign in</StyledButton>
      <StyledDivider />

      {/* Badge */}
      <StyledBadge color='red'>Faulted</StyledBadge>
      <StyledBadge color='yellow'>Busy</StyledBadge>
      <StyledBadge color='gray'>Unavailable</StyledBadge>
      <StyledBadge color='green'>Available</StyledBadge>

      <StyledDivider />

      {/* Searchbar */}
      <StyledSearchField placeholder="Search" onChange={handleSearchChange} onSearch={handleSearch} />

      <StyledDivider />

      {/* selectfield */}
      <StyledSelectField placeholder='Select Category' options={options} onChange={handleSelectChange}  />

      <StyledDivider />

      <StyledTable headers={headers} data={data} />

    </div>
  );
}
