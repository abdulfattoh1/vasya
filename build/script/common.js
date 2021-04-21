autoplay();

function navruzTime() {
  const navruzDate = new Date('21 may, 2021, 00:00:00').getTime();
  const now = new Date().getTime();
  const distance = navruzDate - now;
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  const d = Math.floor(distance / day);
  const h = Math.floor(distance % day / hour);
  const m = Math.floor(distance % hour / min);
  const s = Math.floor(distance % min / sec);
  document.querySelector('.day').innerHTML = d;
  document.querySelector('.hour').innerHTML = h;
  document.querySelector('.min').innerHTML = m;
  document.querySelector('.sec').innerHTML = s;
  autoplay();
}

function autoplay() {
  setTimeout(navruzTime, 1000);
}