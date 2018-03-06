// looping
window.onload = function (e) {
    var onPlay = [false, 0],
        playlist = ["../sounds/tone.mp3", "../sounds/tone2.mp3"], // liste of sounds
        soundBank = [];

    var onEnd = function (e) {
        onPlay[1] = (onPlay[1] + 1 === soundBank.length) ? 0 : onPlay[1] + 1;
        console.log(onPlay[1])
        soundBank[onPlay[1]].play();
    };

    playlist.forEach(function (current, i) {
        console.log(i, "Current", current)
        soundBank.push(new Howl({ src: [playlist[i]], onend: onEnd }))
    });

    start()
    function start(e) {
        onPlay[0] = true;
        soundBank[0].play();
    };
}