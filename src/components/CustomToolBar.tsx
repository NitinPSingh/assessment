import { Avatar, IconButton, Typography,MenuIcon } from '@mui/material'
import React from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchInput from './SearchInput'

export default function CustomToolBar() {
  return (
    <div className='flex flex-1 justify-between items-center'>
          <Typography variant="h6" className='text-brand-secondary' noWrap component="div">
            AI/ML Model Builder
          </Typography>
          <SearchInput />
          <div className='flex items-center'>
          <IconButton ><SettingsOutlinedIcon fontSize='large'/></IconButton>
          <Avatar>H</Avatar>
          </div>
       </div>
  )
}
