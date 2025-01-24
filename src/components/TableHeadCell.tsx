import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ModelDataObj } from '../constants/types';

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
