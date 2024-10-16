// main.js

// 실시간 시계를 표시하는 함수
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `시계: ${hours}:${minutes}:${seconds}`;
}

// 1초마다 시간 업데이트
setInterval(updateTime, 1000);

// 페이지 로드 시 시간을 즉시 업데이트
window.onload = updateTime;

// 로그인 여부를 확인하는 변수 (false는 로그인 안됨, true는 로그인됨)
let isLoggedIn = false;

// ul 태그 안의 모든 li 요소에 클릭 이벤트 추가
const listItems = document.querySelectorAll('ul li');

// 로그인 여부에 따라 알림창 또는 페이지 이동
listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (!isLoggedIn) {
            alert(`로그인 후 이용 가능합니다.`);
        } else {
            // 로그인된 상태라면 클릭한 항목에 따라 페이지 이동
            window.location.href = `./html/result_${index + 1}.html`;
        }
    });
});

