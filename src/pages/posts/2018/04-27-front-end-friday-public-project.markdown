---
layout: post
title:  "Front-end Friday: Launching a small app"
date:   2018-04-27 08:00:00
tags: ['dev', 'front-end friday']
---

*(Note: this isn't a tutorial...)*

After getting some decent feedback about my [Pet Finder project](https://sceendy.com/blog/2018/01-17-new-project-atx-pet-finder/) from friends, I decided to launch it as its own stand alone web app instead of hosting it on my personal site. 

Along with that decision, I also decided to do other things such as redesigning it, rebuilding it, including continous integration/deployment, and hosting it with a separate domain.

### redesign
While I was content with the initial design, I did want to try to come up with some branding and build a custom component library for the app. 

I used Sketch to design reusable components for the app and from there started putting them together on a page for both mobile and desktop. I didn't need to have everything all designed out -- just enough components to start building. I got the idea of using pink and purple as the colors when I saw a [shot on dribbble by InvisionApp](https://dribbble.com/shots/4421099-Wake-joins-InVision-Introducing-Wake-Free). 

The filter was moved above the pet list and map to look a little more like a control for the page. Also, instead of pagination, the map would now stick to the page as you scroll through the entire pet list. This seems like a more appropriate UX since people were filtering narrowly and scrolling just felt much more natural.


### rebuilding
Since I figured out the logic in the initial build, I decided to use the redesign as an opportunity to rebuild it using a library I hadn't really used. The project was initially built using Angular which is great but totally overkill for a tiny single view app. I chose to use React as I had been wanting to try it for a while and provided the things I wanted in a small library over a framework.

I kept everything straight forward and simple by using Webpack, PostCSS, React/Redux, and Jest/Enzyme for testing. 

### continuous CI/CD
With the app being public, I knew I'd want to automate the process of building, testing, and deploying the code. I chose to use [CircleCI](https://circleci.com/) for CI since I found the dashboard quite simple to use. I used git for version control and am hosting that code on Github using [GH-Pages](https://github.com/tschaub/gh-pages) so all I had to do was add the project on my CircleCI dashboard. Then, I simply added a file to my repo to complete the integration.

Once I had a successful build, I created a new heroku project to host it and deployed it from there.

[ATX Paw Finder](https://www.atxpawfinder.com/)