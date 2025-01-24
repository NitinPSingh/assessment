import { DateRange } from "rsuite/esm/DateRangePicker/types";

const createDateFormatter = (locale: string, options: Intl.DateTimeFormatOptions) => {
    const formatter = new Intl.DateTimeFormat(locale, options);
    return (date: Date) => formatter.format(date);
  };
  
  
export const formatToDDMMYYYY = createDateFormatter('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

export function formatDateRange(dateArray: DateRange | null): string {
    if(dateArray==null) {
      return  `DD/MM - DD/MM`
    }
    const startDate = dateArray[0];
    const endDate = dateArray[dateArray.length - 1];

    
  

    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    const startDateStr = startDate.toLocaleDateString('en-US', options);
    const endDateStr = endDate.toLocaleDateString('en-US', options);
  
    return `${startDateStr} - ${endDateStr}`;
  }