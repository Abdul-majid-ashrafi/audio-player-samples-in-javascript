var sound = new Howl({
    src: ["http://server8.mp3quran.net/ahmad_huth/001.mp3"],
    html5: true, // A live stream can only be played through HTML5 Audio.
    format: ['mp3'],
    autoplay: true,
    volume: 0.1,
    onend: function () {
        console.log('Finished!');
    }
});
