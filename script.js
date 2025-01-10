const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;
let autoPlayInterval;

// インジケーターの背景色や枠線を更新する関数
function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    // アクティブなインジケーターに枠線を変更
    if (i === count % totalSlides) {
      lists[i].style.backgroundColor = '#000'; // 背景色を黒
      lists[i].style.border = '2px solid #fff'; // 枠線を白色に
    } else {
      lists[i].style.backgroundColor = '#fff'; // 非アクティブなインジケーターの背景色
      lists[i].style.border = '2px solid #000'; // 非アクティブなインジケーターの枠線
    }
  }
}

// 次のスライドに移動
function nextClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count++;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}

// 前のスライドに戻る
function prevClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}

// 自動再生を開始
function startAutoPlay() {
  autoPlayInterval = setInterval(nextClick, 5000);
}

// 自動再生をリセット
function resetAutoPlayInterval() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// 次ボタンのクリックイベント
next.addEventListener('click', () => {
  nextClick();
  resetAutoPlayInterval();
});

// 前ボタンのクリックイベント
prev.addEventListener('click', () => {
  prevClick();
  resetAutoPlayInterval();
});

// インジケーターのクリックイベント
indicator.addEventListener('click', (event) => {
  if (event.target.classList.contains('list')) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count = index;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
    resetAutoPlayInterval();
  }
});

// 初回の自動再生開始
startAutoPlay();

// ハンバーガーメニューのトグル
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function() {
    menu.classList.toggle("active");
});
