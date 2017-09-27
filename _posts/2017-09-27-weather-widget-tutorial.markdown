---
layout: post
title:  "JS tutorial #2 - a five day forecast widget"
date:   2017-09-27 15:46:00
tags: ['dev', 'tutorial', 'beginner js']
comments: true
---
<img src="/assets/blog-tweet.png" class="img--responsive" alt="tutorial tweet"/>

<p>Earlier this year, a blog post of mine got some attention from a Google engineer, Ben Lesh, who is also a development lead for RxJS. It remains my most read blog post, actually. I'd like to think people starting out with JavaScript found it helpful. And you know, in the end, have something to show for it.</p>

<hr/>
<p><em>Check out <a href="/2017/01/29/a-basic-js-music-player.html">Part One</a> to get a basic understanding of the DOM, variables, arrays, objects, functions, and event listeners in JavaScript. </em></p>
<hr/>

<p>I considered writing a part 2 building on the music player tutorial to have it interact with an open music API but the API's I looked at all required oAuth which some might find intimidating. While this is an incredibly common part of using open API's, I want to keep these tutorials pretty simple to cover the basics. Instead, I decided to make another common widget that would allow for me to make use of a simpler, open API.</p>

<h4>Overview</h4>

<p>Ah, the popular weather widget - you will find thousands of designs for them on <a href="https://dribbble.com/search?q=weather" target="_blank">dribbble</a>. For this widget, we will be using the <a href="http://openweathermap.org/forecast5">Open Weather Map API</a> to obtain their 5 day forecast data which we can render in our widget. For this example, I built out an existing design using HTML/CSS.</p>

<img src="https://i.imgur.com/woC7RA9.png" alt="Weather Widget Design" class="img--responsive" />
<br/>
<p>You can grab the <a href="https://jsfiddle.net/sceendy/nea4z7ff/embedded/css/" target="_blank">CSS for this (slightly modified) design</a> and use the following HTML:</p>

````html
<div class="component__weather-box">
  <div class="component__weather-content">
    <div class="weather-content__overview"></div>
    <div class="weather-content__temp"></div>
  </div>
  <div class="component__forecast-box"></div>
</div>
````

<h4>Variables</h4>
<p>Just like in the <a href="/2017/01/29/a-basic-js-music-player.html">music player tutorial</a>, elements will be stored in variables. The variables will be referenced later when you want to render the data. </p>

<p></p>

````javascript
const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0];
````

<h4>Working with an application programming interface (API)</h4>
<p>Interacting with API's is an important part of web development. An API is essentially a messenger that receives requests and sends responses from the server. A <a href="https://www.youtube.com/watch?v=s7wmiS2mSXY" target="_blank">common, helpful analogy</a> is to think of an API as a waiter at a restaurant - the waiter (API) takes your request/order that tells the kitchen (system) and then delivers the food (response/data) back to your client(i.e. the browser).</p>

<p>For this project, you will need to get an API key to access the Open Weather API. You can easily get a unique API key by <a href="https://home.openweathermap.org/users/sign_up" target="_blank">signing up</a>. An API key is a unique token that works as a method of authorization so that you can access the data from the API.</p>

<p>Once you've done that, store the API endpoint (a URL for the service) for the <a href="http://openweathermap.org/forecast5" target="_blank">five day daily forecast</a> in a variable called <span class="code-inline">URL</span> and add your APP ID (your API key) to the API endpoint for the five day daily forecast for a city (I'm going to use Dallas). I've customized this endpoint to return 7 lines from the API call (<span class="code-inline">cnt=7</span>) and to use Fahrenheit (<span class="code-inline">units=imperial</span>). You can edit these parameters as you please by visiting the <a href="http://openweathermap.org/forecast5" target="_blank">API doc</a> to check the other options. Fill in the city and APP ID.</p>

````javascript
const URL = "https://api.openweathermap.org/data/2.5/forecast/daily?" +
"q=CITY&cnt=7&units=imperial&APPID=YOUR_APP_ID";
````

<p>Cool, now we know what we will be communicating with and how to access it.</p>

<h4>JavaScript: Fetch API</h4>
<p>The Fetch API provides you with a powerful JavaScript interface that gives you the ability to access and manipulate parts of a page easily. When making a request, a promise will be returned. A <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">promise</a> allows you to trigger numerous requests at once and as they become ready, you can handle them. The promise will provide resolve and reject functions which you can call in the body based on the result. </p>

<p>TL;DR:</p>

<blockquote>A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). <br/>- <strong>Eric Elliott</strong></blockquote>

<p>We can write a very simple fetch request - it'll take the path for the resource (the variable we named <span class="code-inline">URL</span>) as the first parameter. The second parameter allows you to control some settings such as declaring the method and headers. We will use the <span class="code-inline">GET</span> method and include a <span class="code-inline">Headers</span> object. (We don't need to append anything to the headers here but <a href="https://developer.mozilla.org/en-US/docs/Web/API/Headers" target="_blank">there are actions</a> you could take if you wanted to.)</p>

<p>Once that call is made, it returns a promise containing the response object. Let's see how this works in practice. </p>

<!-- explain second argument (method/headers)
explain .then and return the json -->

```javascript
function getWeatherData() {
  let headers = new Headers();

  return fetch(URL, {
    method: 'GET',
    headers: headers
  }).then(data => {
    return data.json();
  });
}
````

<p>The promise gets a <span class="code-inline">then</span> method which allows you to react to the promise. We call the result <span class="code-inline">data</span> in line 6 and return the data in JSON format. Now, we can call that function, and once the promise is fulfilled successfully, use that JSON.</p>

Returned data from promise:<br/><br/>
<img src="https://i.imgur.com/tSlVAfn.png" alt="Weather Data in JSON format" class="img--responsive" />

<h4>JavaScript: The Promise</h4>

<p>Now that we have data, we want to attach a callback that passes that data so that we can start using it. We add a <span class="code-inline">then</span> method to the function and it will be passed the result of <span class="code-inline">data.json()</span> as <span class="code-inline">weatherData</span>.</p>

<p>Based on the design, we will want the name of the city, a description of the current weather, the current temperature, and the daily forecast (day + temp). We can store the relevant data as variables to be used in a function called <span class="code-inline">renderData()</span>.</p>

````javascript
getWeatherData().then(weatherData => {
  let city = weatherData.city.name;
  let dailyForecast = weatherData.list;

  renderData(city, dailyForecast);
});
````

<h4>JavaScript: Template Literals</h4>

<p>In the beginning of this post, we stored elements as variables. If you read Part One of this tutorial series, you are familiar with the <span class="code-inline">innerHTML</span> property that you can access on elements. This property allows you to get or set the HTML inside of the element. </p>

<p>In <span class="code-inline">renderData()</span>, you first store the weather for today to access it for the description and current temperature. As the design has the city name on the left with the description of the current weather below it, you want to write the HTML using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank">template literals</a>.</p>

<p>Template literals are string literals that allow you to embed expressions. Here (line 3), we place back-ticks instead of quotes in the <span class="code-inline">widgetHeader</span> identifier to include the data. You can write out HTML as you normally do and then use a dollar sign and curly braces to include the location (<span class="code-inline">${location}</span>) and current weather description (<span class="code-inline">${currentWeather.description}</span>). </p>

````javascript
renderData = (location, forecast) => {
  const currentWeather = forecast[0].weather[0];
  const widgetHeader =
  `<h1>${location}</h1><small>${currentWeather.description}</small>`;

  CURRENT_TEMP.innerHTML =
  `<i class="wi ${applyIcon(currentWeather.icon)}"></i>
  ${Math.round(forecast[0].temp.day)} <i class="wi wi-degrees"></i>`;

  CURRENT_LOCATION.innerHTML = widgetHeader;

  // render each daily forecast
  forecast.forEach(day => {
    let date = new Date(day.dt * 1000);
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let name = days[date.getDay()];
    let dayBlock = document.createElement("div");
    dayBlock.className = 'forecast__item';
    dayBlock.innerHTML =
      `<div class="forecast-item__heading">${name}</div>
      <div class="forecast-item__info">
      <i class="wi ${applyIcon(day.weather[0].icon)}"></i>
      <span class="degrees">${Math.round(day.temp.day)}
      <i class="wi wi-degrees"></i></span></div>`;
    FORECAST.appendChild(dayBlock);
  });
}
````

<p>Since our <span class="code-inline">forecast</span> argument is an array, we use the <span class="code-inline">forEach()</span> method to iterate once over each item in that array. As we iterate over each element (which we name <span class="code-inline">day</span>), we are doing several things:</p>
<ul>
  <li>Converting the unix timestamp (<span class="code-inline">day.dt</span>) to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank">an actual date</a></li>
  <li>Creating an array with the days of the week starting from Sunday</li>
  <li>Using the <span class="code-inline">getDay()</span> method on the date object, we get the day of the week (0-6)</li>
  <li>Get the index of the array from returned value of <span class="code-inline">getDay()</span> and store the day name</li>
</ul>

<p>Once we're done making new elements for each day that render the data, all that is left is using the <span class="code-inline">append()</span> method to insert our elements to the parent element (stored in <span class="code-inline">FORECAST</span>).</p>

<iframe width="100%" height="400" src="//jsfiddle.net/sceendy/nea4z7ff/embedded/result/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
