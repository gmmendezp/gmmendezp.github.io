const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (value: string) => {
  const [year, month] = value.split("-");

  if (!year || !month) return value;

  const monthIndex = Number(month) - 1;

  if (!Number.isInteger(monthIndex) || !monthNames[monthIndex]) return value;

  return `${monthNames[monthIndex]} ${year}`;
};

export const formatDateRange = (startDate: string, endDate?: string) => {
  const formattedStartDate = formatDate(startDate);

  if (!endDate) return `${formattedStartDate} - Present`;

  const formattedEndDate = formatDate(endDate);

  if (formattedStartDate === formattedEndDate) return formattedStartDate;

  return `${formattedStartDate} - ${formattedEndDate}`;
};
