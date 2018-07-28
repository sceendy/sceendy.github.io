---
layout: post
title:  "Front-end Friday: Launching a small app"
date:   2018-06-15 08:00:00
tags: ['dev', 'front-end friday']
---

After getting some decent feedback about my Pet Finder project from friends, I decided to launch it as its' own stand alone web app instead of hosting it on my personal site. 

Along with that decision, I also used it as an opportunity to do several things such as redesigning it, rebuilding it, including continous integration/deployment, and hosting it with a separate domain.

#### redesign
While I was content with the initial design, I did want to try to come up with some branding and build a custom component library for the app. 

I used Sketch to design reusable components for the app and from there started putting them together on a page for both mobile and desktop. I didn't need to have everything all designed out -- just enough components to start building. I got the idea of using pink and purple as the colors when I saw a [shot on dribbble by InvisionApp](https://dribbble.com/shots/4421099-Wake-joins-InVision-Introducing-Wake-Free). 


#### rebuilding
Since I figured out the logic and UX in the initial build, I decided to use the redesign as an oppotunity to rebuild it using a library I hadn't really used. The project was initially built using Angular which is great but totally overkill for a tiny single view app. I chose to use React as I had been wanting to try it for a while and since it's just JavaScript, easy enough to pick up.

I kept everything straight forward and simple by using Webpack, PostCSS, React/Redux, and Jest/Enzyme for testing. 

#### adding best practices
With the app being public, I knew I'd want to automate the process of building, testing, and deploying the code. I chose to use [CircleCI](https://circleci.com/) for CI since I had used it before. I used git for version control and am hosting that code on Github so all I had to do was add the project on my CircleCI dashboard. Then, all I had to do was add a file to my repo to complete that integration.

Once I had a successful build, I created a new heroku project to host it and deployed it from there.

#### buy domain

https://www.atxpawfinder.com/