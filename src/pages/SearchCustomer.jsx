import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LastSynced from '../layout/LastSynced'
import StyledInput from '../ui/styledInput'
import StyledSelectField from '../ui/styledSelectField'
import StyledButton from '../ui/styledButton'
import CustomerCard from '../components/crm/searchCustomer/customerCard'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { getUserByEmailMobile } from '../services/userApi'

const selectOptions = [
  { value: 'number', label: 'Phone Number' },
  { value: 'email', label: 'Email' }
]

export default function SearchCustomers() {
  const [selectedOption, setSelectedOption] = useState('number')
  const [inputValue, setInputValue] = useState('')
  const [searchCustomers, setSearchCustomers] = useState()
  const onSubmit = () => {
    if (inputValue === '') {
      toast.error(selectedOption === 'email' ? 'Enter Email' : 'Enter Phone number')
      return
    }
    if (selectedOption === 'email' && inputValue.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      getCustomer(`email=${inputValue}`)
    } else if (selectedOption === 'email') {
      toast.error("Enter Valid email")
    } else {
      getCustomer(`phoneNumber=${inputValue}`)
    }
  }

  const getCustomer = (data) => {
    getUserByEmailMobile(data).then((res) => {
      if (res) {
        setSearchCustomers(res.result[0])
      }
      console.log(res);
    }).catch(error => {
      toast.error(error.response.data.error)
    })
  }

  return (
    <Box>
      <LastSynced heading={'Search Customer'} lastSyncVisible={false} />
      <Stack direction={'column'} spacing={1} sx={{ backgroundColor: 'secondary.main', m: 4, py: 4, px: 4, borderRadius: 2 }}>
        <Typography>Search by</Typography>
        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
          <StyledSelectField options={selectOptions} placeholder={'select Search Option'} value={selectedOption}
            onChange={(e) => { setSelectedOption(e.value) }}
          />
          <StyledInput type={selectedOption === 'number' ? 'number' : 'text'} placeholder={selectedOption === 'number' ? 'Enter Phone Number' : 'Enter Email'} onChange={(e) => setInputValue(e.target.value)} />
          <StyledButton variant='primary' style={{ width: { sx: '250px', md: '100%' } }} onClick={onSubmit}>Search</StyledButton>
        </Stack>
      </Stack>
      <Grid container spacing={1} px={4}>
        { searchCustomers && 
          <Grid item xs={12} md={3} xl={2}>
            <CustomerCard data={searchCustomers} />
          </Grid>
        }
      </Grid>
    </Box>
  )
}
