const cmd = require('node-cmd');
const http = require('https');

setInterval(() => {
    http.get({
        hostname: 'nova.qweb.by',
        path: '/'
    }, (res) => {
        if(res.statusCode >= 400) {
            cmd.get('omxplayer -o local Music/tak_kto_yeto_sdelal.mp3', () => {
                console.log('ALERT!')
            })
        }
    });
}, 6000);