import { DateTime } from './luxon.js';

const manageDate = () => {
  const datePara = document.createElement('p');
  const dateDisplay = document.querySelector('.date-display');
  const getDate = () => {
    const now = DateTime.now();
    const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    datePara.textContent = date;
    dateDisplay.appendChild(datePara);
  };
  setInterval(getDate, 1000);
};
export default manageDate;
