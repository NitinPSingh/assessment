import React from 'react'
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import { ModelDataObj } from '../constants/types';
import { IconButton } from '@mui/material';

interface TableHeadCellProps {
    sortConfig?:{ key: keyof ModelDataObj; direction: 'asc' | 'desc' } | null,
    handleSort?: ( key: keyof ModelDataObj )=> void,
    label: string,
    objKey?:  keyof ModelDataObj,
    sortable: boolean
}
export default function TableHeadCell({sortConfig,handleSort,label,objKey,sortable=true}:TableHeadCellProps) {
  return (
    <div className='flex '>
        <div className='text-lg whitespace-nowrap !text-lead-600'>{label}</div>
        <div onClick={()=>handleSort && objKey && handleSort(objKey)} className={`text-lead-400 ${sortable?"":"hidden" }`}>
            {sortConfig?.key == objKey ? sortConfig?.direction == "asc" ? <ArrowDownwardIcon />: <ArrowUpwardIcon/> :<SwapVertOutlinedIcon />}           
        </div>
    </div>
    
  )
}
