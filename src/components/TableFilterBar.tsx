import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { DateRangePicker } from 'rsuite';
import 'rsuite/DateRangePicker/styles/index.css';
import { DateRange } from 'rsuite/esm/DateRangePicker/types';
import { formatDateRange } from '../utils';

interface TableFilterBarProp {
  searchKeyword : string,
  handleSearch : (data:string) => void,
  dateArray : DateRange | null,
  handleDateFilter: (date: DateRange | null) => void
}

export default function TableFilterBar({searchKeyword,handleSearch,dateArray,handleDateFilter}:TableFilterBarProp) {
  
  return (
    <div className='flex w-full gap-4 mb-1'>
        <div className='bg-[#F9FAFB] p-4 rounded-lg flex-1 flex'>
            <SearchOutlinedIcon className='h-6 w-6 mr-2'/>
            <input className='flex-1 bg-transparent inline text-xl outline-none' placeholder='Search by Name, Id, Type, Description' value={searchKeyword} onChange={(e)=>handleSearch(e.target.value as string)} />

        </div>
        <div className='relative bg-[#F9FAFB]'>
        <DateRangePicker className='bg-transparent h-full relative z-[1]  text-center rounded-lg custom-date-range-picker' showOneCalendar ranges={[]}  onChange={(value)=>handleDateFilter(value)} format='dd/MM' />
          <div className='absolute w-full h-full flex items-center justify-center top-0 left-0 z-[0] bg-transparent'>
            <CalendarMonthOutlinedIcon className='mr-2'/>
            {formatDateRange(dateArray)}</div>
        </div>
        

        <div className='bg-[#F9FAFB] p-4 text-lead-500 flex  justify-center items-center rounded-lg w-[10%]'>
            <TuneOutlinedIcon className='h-6 w- mr-2'/>
            Filters

        </div>
        
    </div>
  )
}
