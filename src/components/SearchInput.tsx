import React, { useRef, useEffect, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';

export default function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false); 

  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  
  useEffect(() => {
    const inputElement = inputRef.current;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    if (inputElement) {
      inputElement.addEventListener('focus', handleFocus);
      inputElement.addEventListener('blur', handleBlur);
    }

    
    return () => {
      if (inputElement) {
        inputElement.removeEventListener('focus', handleFocus);
        inputElement.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  return (
    <div className='bg-[#F9FAFB] text-lead-600 rounded-xl relative flex items-center justify-center'>
      <SearchOutlinedIcon className='absolute h-6 w-6 left-2' />
      <input
        ref={inputRef}
        type='text'
        placeholder='Search...'
        className='w-full px-4 pl-10 py-2 rounded-xl bg-transparent inline text-xl focus:outline-none focus:ring-2 focus:ring-brand-primary'
      />
 
      {!isFocused && (
        <p className='text-sm absolute right-2 text-lead-500 whitespace-nowrap'>
          <KeyboardCommandKeyOutlinedIcon /> + <kbd>K</kbd>
        </p>
      )}
    </div>
  );
}