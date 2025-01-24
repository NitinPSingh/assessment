import React from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import { Toolbar } from '@mui/material';
import logo from '../assets/AventisiaV1.png'
const Sidebar = () => {
    return (
        <>
        <Toolbar className='bg-[#F8FAFC]' >
            <img src={logo}/>
        </Toolbar>
      <div className="bg-white shadow-md h-full rounded-lg p-6 text-lead-600 text-base">
        <div className="space-y-2">
        <div className="flex items-center space-x-2">
            <span className="text-[#202020] text-sm font-semibold">Model Library</span>
          </div>
        <div className="flex items-center space-x-2 rounded-lg bg-brand-secondary text-white">
            
          <div className="   p-2 ">
            <GridViewOutlinedIcon className="h-6 w-6 " />
          </div>
          <h2 className=" font-medium  ">Model Library</h2>
        </div>
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-[#202020] text-sm font-semibold">Extraction Builder</span>
          </div>
  
          <div className="flex items-center space-x-2">
            <div className="   p-2">
              <GridViewOutlinedIcon className="h-6 w-6 " />
            </div>
            <span className="  font-medium">Label Data</span>
          </div>
  
          <div className="flex items-center space-x-2">
            <div className="   p-2">
              <LayersOutlinedIcon className="h-6 w-6 " />
            </div>
            <span className="  font-medium">Model</span>
          </div>
  
          <div className="flex items-center space-x-2">
            <div className="   p-2">
              <EventNoteOutlinedIcon className="h-6 w-6 " />
            </div>
            <span className="  font-medium">Test</span>
          </div>
        </div>
  
        <div className="mt-6 space-y-2">
        <div className="flex items-center space-x-2">
            <span className="text-[#202020] text-sm font-semibold">Help</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="   p-2">
              <SettingsOutlinedIcon className="h-6 w-6 " />
            </div>
            <span className="  font-medium">Setting</span>
          </div>
  
          <div className="flex items-center space-x-2">
            <div className="   p-2">
              <SupportAgentOutlinedIcon className="h-6 w-6 " />
            </div>
            <span className="  font-medium">Support</span>
          </div>
        </div>
      </div>
      </>
    );
  };
export default Sidebar;