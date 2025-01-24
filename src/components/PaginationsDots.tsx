import { IconButton } from '@mui/material';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

interface PaginationsDotsProps {
  totalPages: number;
  currPage: number;
  handleCurrPage: (n: number) => void;
}

export default function PaginationsDots({ totalPages, currPage, handleCurrPage }: PaginationsDotsProps) {
  
  if (totalPages < 6) {
    return (
    <div className="flex gap-2">
        <IconButton className={`h-6 w-6 text-center cursor-pointer !text-brand-primary !bg-[#E8F9FF] rounded-full `} disabled={currPage==0} onClick={()=>handleCurrPage(currPage-1)}><KeyboardArrowLeftIcon /></IconButton>
        {[...Array(totalPages)].map((_, i) => (
          <div
            key={i}
            onClick={() => handleCurrPage(i)}
            className={`h-6 w-6 text-center cursor-pointer ${
              currPage === i ? 'text-white bg-brand-primary rounded-full' : 'text-brand-primary'
            }`}
          >
            {i + 1}
          </div>
        ))}
         <IconButton className={`h-6 w-6 text-center cursor-pointer !text-brand-primary !bg-[#E8F9FF] rounded-full `} disabled={currPage==totalPages-1} onClick={()=>handleCurrPage(currPage+1)}><KeyboardArrowRightIcon/></IconButton>
      </div>
      
    );
  }

  
  const generatePaginationNumbers = () => {
    const res: (number | string)[] = [];

    
    if (currPage > 3) {
      res.push(1, 2);
      res.push('..');
    } else {
      
      for (let i = 1; i <= Math.min(3, totalPages); i++) {
        res.push(i);
      }
    }

    
    const start = Math.max(3, currPage );
    const end = Math.min(totalPages - 2, currPage + 2);

    for (let i = start; i <= end; i++) {
      if (!res.includes(i)) {
        res.push(i);
      }
    }

    
    if (currPage < totalPages - 3) {
      if (!res.includes(totalPages - 1)) {
        res.push('..');
        res.push(totalPages - 1, totalPages);
      }
    } else {
      
      for (let i = Math.max(totalPages - 2, 1); i <= totalPages; i++) {
        if (!res.includes(i)) {
          res.push(i);
        }
      }
    }

    return res;
  };

  const paginationNumbers = generatePaginationNumbers();

  return (
    <div className='flex gap-2'>
        <IconButton className={`h-6 w-6 text-center cursor-pointer !text-brand-primary !bg-[#E8F9FF] rounded-full `} disabled={currPage==0} onClick={()=>handleCurrPage(currPage-1)}><KeyboardArrowLeftIcon /></IconButton>
      {paginationNumbers.map((num, i) => (
        <div
          key={i}
          onClick={() => typeof num === 'number' && handleCurrPage(num-1 )}
          className={`h-6 w-6 text-center ${typeof num === 'number' && "cursor-pointer"} ${typeof num === 'number' && currPage+1 === num ?"text-white bg-brand-primary rounded-full":"text-brand-primary"} `}
          style={{
            cursor: typeof num === 'number' ? 'pointer' : 'default',
            fontWeight: typeof num === 'number' && currPage === num - 1 ? 'bold' : 'normal',
          }}
        >
          {num}
        </div>

      ))}

     <IconButton className={`h-6 w-6 text-center cursor-pointer !text-brand-primary !bg-[#E8F9FF] rounded-full `} disabled={currPage==totalPages-1} onClick={()=>handleCurrPage(currPage+1)}><KeyboardArrowRightIcon/></IconButton>
    </div>
  );
}