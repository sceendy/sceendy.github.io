---
title: 'JS Tutorial #1 - a basic JS music player'
description: 'digital rebirth blog post'
pubDate: 'January 29 2017'
heroImage: '../../assets/js-tutorial-music-player.png'
---

__**Note:** With a growing number of people asking me on how to get started with JavaScript, I've decided to put together a post dedicated to building a simple music player that covers the basics of JavaScript. This is very much intended for people that write HTML/CSS daily but have only dabbled with JS.__

<hr/>

## Overview

Our music player will have the following functionality:
- Play and pause song of choice
- Apply artist name/image, song duration/title to player using basic methods
- Use event listeners to update song time progress and play/pause icon

## Design
First, we need a design. I chose to go with one I have previously built out that I found on <a href="https://dribbble.com/shots/2133799-Is-This-Love-Music-Player" target="_blank">dribbble</a>. With some slight adjustments it works for the functionality we plan on adding. Once you have this basic functionality, you should also add the ability to change songs (previous, next) that are included in this design. 

<img src="https://d13yacurqjgara.cloudfront.net/users/369807/screenshots/2133799/is-this-love_1x.png" class="img--responsive"/>

## HTML

I have included the HTML as you will be manipulating the elements using JavaScript. The class/id names attached to each will be important for referencing the elements. You can either write the CSS yourself or just use <a href="https://codepen.io/sceendy/pen/LxbpwB.css" target="_blank">mine</a>. I use some pretty self-explanatory naming conventions for my classes.

```html
<div class="component__player">
  <div class="player__image">
  </div>
  <div class="component__progress-bar">
    <div class="progress"></div>

    <span class="time-progressed">`
    <span class="time-total">`
  </div>
  <div class="player__info"></div>
  <div class="player__controls">
    <div id="btn-play-pause">
      <i class="material-icons">play_circle_filled</i>
    </div>
    <div class="player__heading">
      <h1></h1>
      <h3></h3>
    </div>
  </div>
</div>
```

## JavaScript: Elements

As you start out, the `document` interface may be one of most common references you'll see in your JavaScript. It represents your web page in the browser and serves as an entry point into your content.

When you want to interact with an element, you will use the `document` objects' *methods to help you target the element you want. For example, if you want to get an element by a class or tag name, `document**.getElementsByClassName('player__image');**`. <em>(For tags you would just replace the word "class" for "tag" and specify the tag name instead.)</em> Calling this method would return an array (a list) of elements that have the class name "`player__image`".

For this example, the method returns an array that has one single element. You want to target the element instead of getting the whole array so you'll update your line to look include the index for that element: `document.getElementsByClassName('player__image')**[0]**;`. (With arrays the index starts at 0.)

Another method you might find yourself using is `document**.getElementById('idName')**;` which will target the element with the matching id attribute. The id attribute holds a unique identifier specific to that element thus instead of an array, it returns the element. There is one element that has an id attribute in our HTML so we can write `document.getElementById('btn-play-pause');`.

__**Note:** These methods are not specific to the `document`. You can use these methods on any element.__

## JavaScript: Variables

In JavaScript, you'll find yourself reusing references often and you probably don't want to keep writing `document.getElementsByClassName('time-progressed')[0];` each time. What you can do is store that reference as a variable for reusability and improved readability. ES2016 introduces `const` which creates a fixed, block-scoped variable. This means that the value will not be changed and it is at the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block" target="_blank">block level</a> (within the curly braces). Our variables will not have their values changed at any point so we will store our element references as `const`. </p>
<p>With that quick rundown of basic methods, you can now make references to the elements we created for this music player.

```javascript
const PLAYER_PROGRESS = document.getElementsByClassName('time-progressed')[0];
const TOTAL_TIME = document.getElementsByClassName('time-total')[0];
const PLAYER_PROGRESS_BAR = document.getElementsByClassName('progress')[0];
const PLAYER_IMAGE = document.getElementsByClassName('player__image')[0];

const PLAYER_PLAY_BTN = document.getElementById('btn-play-pause');
const PLAYER_ICON = PLAYER_PLAY_BTN.getElementsByClassName('material-icons')[0];

const PLAYER_HEADING = document.getElementsByClassName('player__heading')[0];
const PLAYER_SONG_NAME = PLAYER_HEADING.getElementsByTagName('h1')[0];
const PLAYER_ARTIST_NAME = PLAYER_HEADING.getElementsByTagName('h3')[0];
```

The reason for referencing nearly all of the elements is that we want our player to be entirely dynamic. If we decide to have change the song or add more songs, we want to update the values only in one spot and not have to update it in both the JS and the HTML.

## JavaScript: Arrays + Objects

Now, we find a song we want to use and find an MP3 url out there to use it. You may want to add a few songs to work as more of a playlist later on so we will be creating an array called `playlist` to store our songs. Each song will be an object. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer" target="_blank">Objects</a> have properties which you can think of as variables.

```javascript
let playlist = [
  {
    "src": "http://mstorage.org/music_tmp/d25979b6708e27b595da2492d7fb211e.mp3",
    "artist": "Blink-182",
    "song": "I Miss You",
    "cover": "https://usercontent1.hubstatic.com/13333864_f520.jpg"
  }
]
```

Our array `playlist` contains one object which holds the song data. By storing the data in an object rather than simply having it statically the HTML, you can reuse it anywhere in the JS file.

##JavaScript: Functions

You can start by setting a variable named `index` to indiciate which index in the array you want to play. For now, set it to 0 since you only have one song in the array. When the page is first loaded, the initial time progressed should be 00:00. This number will update once the song is playing.

```javascript
let index = 0;
PLAYER_PROGRESS.innerHTML = '00:00';
```

Functions are objects - so they have properties and methods. Inside of function, we tell it what needs to happen when the function runs. The keyword `new` is an operator that creates an instance of the object. Our `songOne` variable store the creation of a <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement" target="_blank">new audio object</a>. By creating the instance, it is giving you access to an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio">audio element</a> for our HTML. In an audio element, you would write the HTML as simple as:

```html
<audio src="foo.ogg" />
```

As you can see, the element has an attribute called `src` where you place the url for the song. In the new Audio object creation, you pass the source URL as an argument inside of the parenthesis as such: `new Audio('songUrl.mp3')`. For our function, we will accept an argument that we call `trackNumber` that you use to state the index of the array of the song you want to use. Once the object from that index is known, it will get the value of the and `src` property. Your function should currently look like this:

```javascript
playCurrentSong = (trackNumber) => {
  songOne = new Audio(playlist[trackNumber].src);
}
```

Earlier you created variables where you stored your element objects that you can reference. HTML Element objects have two properties that are called `innerHTML` where you can access the content of the HTML and `style` that let's you access inline styles for that element. Currently, the elements are empty and we want to change that to reflect your track data.

```javascript
playCurrentSong = (trackNumber) => {
  songOne = new Audio(playlist[trackNumber].src);
  PLAYER_SONG_NAME.innerHTML = playlist[trackNumber].song;
  PLAYER_ARTIST_NAME.innerHTML = playlist[trackNumber].artist;
  PLAYER_IMAGE.style.backgroundImage = 'url(' + playlist[trackNumber].cover + ')';
}
```
<p>Now that you have the function ready to go, you can simply call it on your JS file.</p>

```javascript
// initialize
playCurrentSong(index);
```

The `Audio` object has a property called `duration` that returns the length of the song in seconds. We want to show the length of the song in the **hh:mm:ss** time format. We can easily write a function that accepts the song duration and returns it in the format that we want doing some simple math. Our function is pretty straight forward.

There's a cool new object you get to use here too called Math. The `Math` object allows you to perform mathematical tasks. We are using the `floor` method which rounds to the nearest integer downwards.

```javascript
// format time from seconds
var formatSecondsAsTime = (secs) => {
  var min = Math.floor(secs / 60);
  var sec = Math.floor(secs - (min * 60));

  if (min < 10) {
    min = "0" + min;
	}
  if (sec < 10) {
    sec = "0" + sec;
  }
  return min + ':' + sec;
};
```

See the `if` keyword? These blocks of code are conditional statements that are used to perform different actions based on different conditions. In this example, we are checking to see if our variables (`min` or `sec`) are less than the integer 10. If these statements are true, they run. If not, they move onto the next block. Then, the function returns the formatted time for us to render.

## JavaScript: Event Listeners

Another method we will want to make use of is `addEventListener()` which we can attach to a specific element as an event handler. We have our `songOne` Audio element and would like to know when the songs' metadata is loaded. When this audio has been loaded, an event called `loadedmetadata` occurs. Perfect. Once it occurs, we want to set the song duration and have it set in our HTML content so that the user can see it on the player.

You can view the <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events" target="_blank">different events</a> for media objects and make use of them as needed. Here, we also make use of `timeupdate` and `ended` to fill in the rest of our player data.

```javascript
// grab values once metadata is loaded
songOne.addEventListener('loadedmetadata', () => {
  songDuration = parseInt(songOne.duration);
  songDurationFormatted = formatSecondsAsTime(songOne.duration);
  songTime = '0' + (songDuration / 60).toString();
  TOTAL_TIME.innerHTML = songDurationFormatted;
});

// update progress bar + time elapsed as song plays
songOne.addEventListener('timeupdate', () => {
  timeProgressed = (songOne.currentTime / songDuration) * 100;
  PLAYER_PROGRESS_BAR.style.width = timeProgressed + '%';
  songTime = parseInt(songOne.currentTime);
  PLAYER_PROGRESS.innerHTML = formatSecondsAsTime(songOne.currentTime);
});

songOne.addEventListener('ended', () => {
  PLAYER_ICON.innerHTML = 'play_circle_filled';
});
```

Cool, now, we want the user to be able to click on the play button and for the song to actually play. We attach the `addEventListener` method to the play button element and want the `click` event to control playing and pausing the song. Both of which are events on the song object.

``` javascript
// play/pause button functionality
PLAYER_PLAY_BTN.addEventListener('click', (e) => {
  e.preventDefault();
  if (songOne.paused) {
    PLAYER_ICON.innerHTML = 'pause_circle_filled';
    songOne.play();
  } else {
    PLAYER_ICON.innerHTML = 'play_circle_filled';
    songOne.pause();
  }
});
```

For this example, I didn't want to host the music myself so I kind of just grabbed the first mp3 link I could find. You get the idea, though. **:)** Hope this helps someone out.

<p data-height="450" data-theme-id="11022" data-slug-hash="LxbpwB" data-default-tab="result" data-user="sceendy" data-embed-version="2" data-pen-title="LxbpwB" class="codepen">See the Pen <a href="https://codepen.io/sceendy/pen/LxbpwB/">LxbpwB</a> by Cindy Juarez (<a href="http://codepen.io/sceendy">@sceendy</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
