// const date = new Date("2002", "11", "33", "8", "10", "20", "300");
// const date = new Date("2002-5-25");
const date = new Date("october 20, 2013 11:13:00");
// console.log(date);

const setYear = date.setFullYear(2020);

const year = date.getFullYear();
const month = date.getMonth();
const todayDate = date.getDate();
const day_week = date.getDay();
const hour = date.getHours();
const seconds = date.getSeconds();
const miliSeconds = date.getMilliseconds();

// console.log(year, month, todayDate);

// console.log(date.toISOString());
// console.log(date.toString());
// console.log(date.toLocaleDateString());
// console.log(date.toDateString());
console.log(date.toUTCString());
