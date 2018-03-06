var sound = new Howl({
    src: ['../sounds/tone2.mp3'],
    autoplay: true,
    // loop: true, // start again 
    volume: 0.1,
    onend: function () {
        console.log('Finished!');
    }
});

