import { ModelDataObj, ModelStatus } from '../constants/types'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { formatToDDMMYYYY } from '../utils';
import { IconButton, TableHead } from '@mui/material';
import { useMemo, useState } from 'react';
import TableHeadCell from './TableHeadCell';
import PaginationsDots from './PaginationsDots';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableFilterBar from './TableFilterBar';
import { DateRange } from 'rsuite/esm/DateRangePicker/types';
interface DataTableViewProp {
    modelData : ModelDataObj[]
}
export default function DataTableView({modelData}:DataTableViewProp) {
    const headCells :{label:string,key: keyof ModelDataObj}[] = [
        { label: 'Model Name', key: 'modelName' },
        // { label: 'ID', key: 'id' },
        { label: 'Model Type', key: 'modelType' },
        { label: 'Description', key: 'description' },
        //{ label: 'Model Type', key: 'modelType' },
        { label: 'Created On', key: 'createdOn' },
        { label: 'Last Trained On', key: 'lastTrainedOn' },
        { label: 'Status', key: 'status' },
        //{ label: 'LLM', key: 'llm' },
      ];
    const [currPage,setCurrPage] = useState(0)
    const [sortConfig, setSortConfig] = useState<{ key: keyof ModelDataObj; direction: 'asc' | 'desc' } | null>(null);
    const [dateFilter,setDateFilter] = useState<DateRange | null>(null)
    const [searchKeyword,setSearhKeyword] = useState<string>("")
    const itemCountPerPage = 10

    const sortedData = useMemo(() => {
      if (!sortConfig && !dateFilter && !searchKeyword) return modelData;
      setCurrPage(0)
      let filteredData = modelData;
      if (searchKeyword) {
       
        filteredData = modelData.filter((item) => {
          return (
            item.modelType.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.id.toString().includes(searchKeyword.toLowerCase()) ||
            item.modelName.toLowerCase().includes(searchKeyword.toLowerCase())
          );
        });
      }
    
      if (dateFilter) {
        const [startDate, endDate] = dateFilter;
        const endOfDay = new Date(endDate);
        endOfDay.setHours(23, 59, 59, 999);

        filteredData = filteredData.filter((item) => {
          const itemDate = item.createdOn; 
          return itemDate instanceof Date && itemDate >= startDate && itemDate <= endOfDay;
        });
      }
    
      if (sortConfig) {
        const { key, direction } = sortConfig;
        return [...filteredData].sort((a, b) => {
          const first = a[key];
          const last = b[key];
    
          if (first instanceof Date && last instanceof Date) {
            return direction === 'asc'
              ? first.getTime() - last.getTime()
              : last.getTime() - first.getTime();
          }
    
          if (typeof first === 'string' && typeof last === 'string') {
            return direction === 'asc'
              ? first.localeCompare(last)
              : last.localeCompare(first);
          }
    
          return 0;
        });
      }
    
      return filteredData;
    }, [modelData, sortConfig, dateFilter, searchKeyword]);
  
    const requestSort = (key: keyof ModelDataObj) => {
      setSortConfig((prev) => {
        if (prev && prev.key === key && prev.direction === 'asc') {
          return { key, direction: 'desc' }; 
        }
        else if(prev && prev.key === key && prev.direction === 'desc') {
          return null; 
        }
        return { key, direction: 'asc' }; 
      });
    };

  return (
    <>
      <TableFilterBar searchKeyword={searchKeyword} handleSearch={(v)=>setSearhKeyword(v)} handleDateFilter={(d)=>setDateFilter(d)} dateArray={dateFilter}/>
      <div className='relative overflow-hidden h-[75%]'>
      <TableContainer sx={{ maxHeight: "100%",marginBottom:"10rem" }}>
          <Table
          stickyHeader aria-label="sticky table"
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
           
          >
         <TableHead >

         
      <TableRow>
        {headCells.map((headCell,_id) => (
          <TableCell
            key={_id}
            align={_id==0?"left":"center"}
            padding={_id==0 ? "none":"normal"}
          >
           <TableHeadCell handleSort={requestSort} sortable sortConfig={sortConfig} label={headCell.label} objKey={headCell.key}/>
          </TableCell>
        ))}
        <TableCell
        align='right'
        padding='none'
          >
           <TableHeadCell  label={"Action"} sortable={false}/>
          </TableCell>
      </TableRow>
    </TableHead>
            <TableBody>
              {sortedData.slice(currPage*itemCountPerPage,currPage*itemCountPerPage + itemCountPerPage).map((data) => 
                  <TableRow
                    hover
                
                    tabIndex={-1}
                    key={data.id}
                    className='cursor-pointer border-b-2 border-gray-200'

                  >
                    <TableCell
                      component="th"
                      id={"LABELID"}
                      scope="row"
                      align='left'
                      padding='none'
                    >
                      <div>
                        <p className='text-lead-700'>{data.modelName}</p>
                        <p className='text-lead-500'>{data.id}</p>
                      </div>
                    </TableCell>
                    <TableCell align="left"><p className='text-lead-600 py-2'>{data.modelType}</p></TableCell>
                    <TableCell align="left"><p className='text-lead-600 py-2 truncate max-w-[120px]'>{data.description}</p></TableCell>
                    <TableCell align="center"><p className='text-lead-600 py-2'>{formatToDDMMYYYY(data.createdOn)}</p></TableCell>
                    <TableCell align="center"><p className='text-lead-600 py-2'>{formatToDDMMYYYY(data.lastTrainedOn)}</p></TableCell>
                    <TableCell align="center"><div className={`text-center capitalize rounded-sm text-base `} style={data.status == ModelStatus.Active?{backgroundColor:"#dcfce7",color:"#16a34a"} :{backgroundColor:"",color:""} }>{data.status}</div></TableCell>
                    <TableCell align="center" padding='none'><IconButton><MoreVertIcon /></IconButton></TableCell>
                  </TableRow>
                
              )}
              {/* {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </TableContainer>
      
       
        
        </div>
        <div className='flex justify-between items-center w-full py-2 bg-white'>
        <div className='text-lead-400'>
          Showing {sortedData.length>0?currPage*itemCountPerPage+1:0} to {Math.min(currPage*itemCountPerPage+itemCountPerPage,sortedData.length)} of {sortedData.length}
              
        </div>
        <PaginationsDots currPage={currPage} handleCurrPage={(p)=>setCurrPage(p)} totalPages={Math.ceil(sortedData.length/itemCountPerPage)}/>
       </div>
    </>
  )
}
