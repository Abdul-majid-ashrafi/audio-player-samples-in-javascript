
// use multiple sounds like forground and background

function playAll() {
    var sound1 = new Howl({
        src: ['../sounds/tone2.mp3'],
        preload: true,
        loop: true,
        volume: 1,
    });
    var sound2 = new Howl({
        src: ["../sounds/sound.mp3"],
        loop: true,
        autoplay: true,
        preload: true,
        volume: 0.5,
    });
    sound1.play()
    sound2.play()
}

playAll()

