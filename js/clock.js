/**
 * Real Time Clock
 */
const clockTime = document.querySelector("#clockTime");

function makeTimeClock() {
  const nowDate = new Date();

  const year = nowDate.getFullYear();
  const month = viewPadding(nowDate.getMonth() + 1);
  const day = viewPadding(nowDate.getDay());
  const hour = viewPadding(nowDate.getHours());
  const minute = viewPadding(nowDate.getMinutes());
  const second = viewPadding(nowDate.getSeconds());

  let clockText = `${year}년 ${month}월 ${day}일 <br/> <h2>${hour}:${minute}:${second}</h2>`;
  clockTime.innerHTML = clockText;
}

function viewPadding(str) {
  return String(str).padStart(2, "0");
}

(() => {
  setInterval(makeTimeClock, 1000);
})();
