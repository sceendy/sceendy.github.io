---
layout: post
title:  "building a chrome extension"
date: 2016-03-18 19:37:00
tags: [javascript', 'api']
---

For the past couple of months, I've been focused on building a personal project on the side. At some point, I realized that I could build a Chrome Extension as a tool to be utilized for this app so hey, why not learn a bit about the chrome.* APIs?

First off, let me say, it was some of the best written documentation I have ever seen. Right away, they tell you everything you need and the most basic things to set up. They include downloadable examples that vary in complexity as well. It helps a lot if you are familiar with HTML/CSS/JS, btw. Initially, I was concerned there might be more to it but after a couple of hours of work, I had a functional extension that we can use:

<img src="/assets/chrome-extension.png" alt="Chrome Extension" class="img"/>

For this project, let's make a Chrome Extension that can help you bookmark locations you want to visit in the future which you store for later use. Later you can hook it up to be sent to your database you have or Firebase.

First, call in Chromes' API to grab some basic info from the page. In this case, you want the title of the page which is often the name of the location and the URL so you can visit the site again if you need to which will be using the Chrome Tabs API. These items will be pre-filled into the form on the popup for your extension as seen above as soon as you click on your logo.

You'll keep your popup-specific JS in a file named popup.js and then your JS related to the page itself will be named content.js. It's important that you keep these <a href="https://developer.chrome.com/extensions/content_scripts" target="_blank">separate</a>.

<iframe width="100%" height="300" src="//jsfiddle.net/sceendy/qrg0Lrx9/embedded/js,html/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

One thing to keep in mind while building a Chrome Extension is that you <a href="https://developer.chrome.com/extensions/contentSecurityPolicy" target="_blank">can't add inline JS to the HTML document</a> (for security reasons) so just add event listeners for your clickable items. For instance, you will see I am adding one to the <span class="code-inline">addAddressBtn</span> element. Then, I'm using the <a href="https://developer.chrome.com/extensions/tabs" target="_blank">Chrome Tabs API</a> to interact with the browser tabs -- here we are querying 'tabs' and assigning the url and title to variables.

Then, we store the value of the current tabs' title to place into the <span class="code-inline">#page-title</span> field and the url into the <span class="code-inline">#page-url</span> field. Boom, half done. Now, let's get into passing messages!

Next, we want to allow the user to select the address text of the location and once they have our extension popup open, they will find that they can easily paste it into the Address field. Since there is no real pattern online for mailing addresses, this is how we will handle it for our extension.

<iframe width="100%" height="300" src="//jsfiddle.net/sceendy/m02kbt4a/embedded/js/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

This function queries the Chrome Tabs API again, this time, we are passing messages between the extension and the content script. Below, the <span class="code-inline">content.js</span> file here is listening (using <span class="code-inline">chrome.tabs.onMessage</span>) for a message (JSON object) from the popup.js file (using <span class="code-inline">chrome.tabs.sendMessage</span>)and then handles it.

<iframe width="100%" height="250" src="//jsfiddle.net/sceendy/sb9v4m1a/embedded/js,html/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

As it gets the current selection in the window, it turns it into a string to be sent back to the popup and pasted onto the textarea field. Now, you have an extension that you can hook up to your choice of backend to store this information and view it!
