
const watchTime = document.querySelector("#watch-time");
const watchDay = document.querySelector("#watch-day");

function getDayKor(day) {
  if(day === 0) {
      day = "일";
  } else if(day === 1) {
      day = "월";
  } else if(day === 2) {
      day = "화";
  } else if(day === 3) {
      day = "수";
  } else if(day === 4) {
      day = "목";
  } else if(day === 5) {
      day = "금";
  } else if(day === 6) {
      day = "토";
  }
  return day;
}
function getNowTime() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  
  const month = String(now.getMonth()+1);
  const date = String(now.getDate());
  const day = String(getDayKor(now.getDay()));
    
  watchTime.innerText = `${hh}:${mm}:${ss}`;
  watchDay.innerText = `${month}월 ${date}일 ${day}요일`;

  }
  
  getNowTime();
  setInterval(getNowTime, 1000);