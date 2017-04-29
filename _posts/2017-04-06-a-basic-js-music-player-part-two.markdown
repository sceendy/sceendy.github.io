---
layout: post
title:  "a basic JS music player - part twp"
date:   2017-04-28 04:53:00
tags: ['dev', 'tutorial', 'beginner js']
comments: true
---

<em>Check out <a href="/2017/01/29/a-basic-js-music-player.html">Part One</a> to get a basic understanding of elements, variables, arrays, objects, functions, and event listeners in JavaScript. </em>

<hr/>

<h4>Overview</h4>

<img src="/assets/blog-tweet.png" class="img--responsive"/>

<p>So, yeah, that happened. While awesome that my last blog post got attention... I feel a little pressure to continue building on it. Sure, it may have helped some people get started with basic/fundamental aspects of JavaScript but I can totally build upon it to introduce a bit fancier aspects of JavaScript. I mean, wouldn't it be cool if your music player was getting data from an API? In real world applications, that's likely what you be doing anyway so it's way more practical. </p>

<p>Now that you read Part One and have an understanding of how to access and manipulate elements in the browser, you're ready to get into some pretty awesome stuff like Asynchronous JavaScript. </p>

<h4>JavaScript: AJAX</h4>

<p>In our player from Part One, I pasted some random mp3 link in our song object inside of the playlist array. Cool, but what if we don't want the playlist data to live in our JavaScript file? With AJAX, you can have your music player update asynchronously by exchanging data with a web server. </p>

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
