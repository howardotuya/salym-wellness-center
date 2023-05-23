"use client"
import { format, parseISO } from 'date-fns';

const formatDate = (dateString) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, 'do MMM, yyyy');
  return formattedDate;
};

const ReDate = ({date}) => {
  const dateString = date;
  const formattedDate = formatDate(dateString);

  return <span>{formattedDate}</span>;
};

export default ReDate;