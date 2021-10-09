// // import Player from '@vimeo/player';

// require('@vimeo/player', function (Player) {
//     const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('play', function() {
//     console.log('played the video!');
// });

// // player.getVideoTitle().then(function(title) {
// //     console.log('title:', title);
// // });
//   });
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});