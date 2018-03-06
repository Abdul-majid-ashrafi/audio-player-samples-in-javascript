# HOWLER.JS
https://www.npmjs.com/package/howler



> ##### audio-player-samples-in-javascript
> I recommended if you need to use local htp server you can follow this link
https://www.npmjs.com/package/http-server





### If you want to use HOWLER in  ES6 or backend just follow this:
###### Install howler
```
npm install howler --save
```
###### Install typescript definition:
```
npm install @typings/howler --save-dev
```
> If Not found : ``` @typings/howler ```
found it here ```npm install --save @types/howler```

###### Import howler in your class:

```import { Howl } from 'howler';```

###### Write Code
```
let sound = new Howl({
      src: ['http://server8.mp3quran.net/ahmad_huth/001.mp3'],
      html5 :true // A live stream can only be played through HTML5 Audio.
    });
    sound.play();
    
    or
    
const sound = new Howl({
  src: ['sound.webm', 'sound.mp3']
})
sound.play() 
```

### Happy coding  :+1:
