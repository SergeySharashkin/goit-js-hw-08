var throttle = require('lodash.throttle');
const TIME_DATA = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let savedTime = 0;
populateTime();

player.setCurrentTime(savedTime);

player.on('timeupdate', throttle(timeCurrenter, 1000));
function timeCurrenter(e) {
  localStorage.setItem(TIME_DATA, e.seconds);
  savedTime = e.seconds;
}
function populateTime() {
  if (localStorage.getItem(TIME_DATA)) {
    savedTime = localStorage.getItem(TIME_DATA);
  }
}
