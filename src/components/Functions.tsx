export const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  export const ConvertTimeUnixIntoIST = (unixTime: number) => {
    const convertedTime = new Date(unixTime * 1000);
    return convertedTime;
  };

 export const formatDate = (date: Date) => {
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    return `${da} ${mo} ${ye}`;
  };

  export const lastFourDaysKeys = [
    {
      key: 0,
    },
    {
      key: 6,
    },
    {
      key: 12,
    },
    {
      key: 23,
    },
  ];