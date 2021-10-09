var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const TIME_DATA = 'videoplayer-current-time';
let savedTime =  localStorage.getItem(TIME_DATA);
console.log(savedTime);
player.setCurrentTime(savedTime).then(function(seconds) {
    return
});

player.on('timeupdate', throttle(timeCurrenter, 1000));
function timeCurrenter() {
      player.getCurrentTime().then(function (seconds) {
      console.log(seconds);
      localStorage.setItem(TIME_DATA, seconds);
    });
  };
// player.setCurrentTime(localStorage.setItem(TIME_DATA));
