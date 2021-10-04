
import Player from '@vimeo/player';

require(['@vimeo/player'], function (Player) {
        var iframe = document.querySelector('iframe');
        var player = new Player(iframe);

        player.on('play', function() {
            console.log('played the video!');
        });
    });
    
    localStorage.setItem('time', JSON.stringify());
    const savedTime = localStorage.getItem('time');
    const parselTime = JSON.parse(savedTime);