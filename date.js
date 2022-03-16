const dateContainer = document.querySelector('.date');
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const daySuffix = ['st', 'nd', 'rd', 'th'];

function updateTime(k) {
  if (k < 10) {
    return `0${k}`;
  }

  return k;
}

function currentDate() {
  const fullDate = new Date();
  const month = fullDate.getMonth();
  const day = fullDate.getDate();
  const year = fullDate.getFullYear();
  let hour = fullDate.getHours();
  let min = fullDate.getMinutes();
  let sec = fullDate.getSeconds();
  let midday = 'AM';
  midday = (hour >= 12) ? 'PM' : 'AM'; /* assigning AM/PM */
  let dayFormat = '';
  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
  }
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  if (day > 3) {
    dayFormat = `${day}${daySuffix[3]}`;
  } else if (day === 3) {
    dayFormat = `${day}${daySuffix[2]}`;
  } else if (day === 2) {
    dayFormat = `${day}${daySuffix[1]}`;
  } else {
    dayFormat = `${day}${daySuffix[1]}`;
  }
  dateContainer.textContent = `${monthNames[month]} ${dayFormat}, ${year}. ${hour} : ${min} : ${sec} ${midday}`;

  setTimeout(() => { currentDate(); }, 1000);
}

currentDate(); /* calling currentTime() function to initiate the process */
