import Player from '@vimeo/player';
// var iframe = document.querySelector('iframe');
// var player = new Player(iframe);
//   var player = new Player(iframe, {
require(['@vimeo/player'], function (Player) {
  var iframe = document.querySelector('iframe');
  var player = new Player(iframe);
  player.on('play', function () {
    console.log('played the video!');
  });
    
  

//   player.getBuffered().then(function (buffered) {
//     console.log(buffered);
//   })
//   .catch(function (error) {
//     console.log('an error occurred')
//   });
//   player.getCurrentChapter().then(function(chapter) {
//     console.log(chapter)
// }).catch(function(error) {
//     // an error occurred
// });
});

