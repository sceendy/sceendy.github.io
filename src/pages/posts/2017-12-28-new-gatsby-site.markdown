---
layout: post
title:  "new gatsby site!"
date:   2017-12-28 11:10:00
tags: ['dev', 'news']
comments: true
---

You may have noticed the new look of this site and there's one tweet that was the source of inspiration for the redesign.

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Ok, here’s the deal. Tweet your personal website plan with the hashtag <a href="https://twitter.com/hashtag/newwwyear?src=hash&amp;ref_src=twsrc%5Etfw">#newwwyear</a> (thanks <a href="https://twitter.com/jamiemchale?ref_src=twsrc%5Etfw">@jamiemchale</a>!):<br>1) When will you start?<br>2) What will you try to accomplish?<br>3) When is your deadline? <br><br>Improve an existing site. Start a new one. Burn one down &amp; start over. It’s up to you.</p>&mdash; Jen Simmons (@jensimmons) <a href="https://twitter.com/jensimmons/status/943323088405581824?ref_src=twsrc%5Etfw">December 20, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


With that tweet in mind, I decided to finally give my site a new look. I've always made gradual design changes to my site, though. That's not a big deal. So, this time, I wanted to challenge myself to learn something new in building it.

#### Previous versions...
When I first built my personal site, I used WordPress. At the time, I was an intern at a WordPress shop so I was super confident in building custom WordPress themes. WordPress is definitely overkill for my purposes, though - a small blog with a static home page doesn't need a full on CMS like that.

Next, I landed on Jekyll, a static site generator. Jekyll is great, it's super easy to setup and maintain. It has even been my go-to for prototypes - especially at my last job where nearly all the projects were built using Ruby. The thing is... I left that job and well, I don't really develop with Ruby myself. So installing Ruby for one small thing does not seem worth it. 

#### Gatsby! 
I saw Gatsby mentioned quite a bit this year on Twitter so I decided to check it out. It's a static site generator like Jekyll but uses React and GraphQL. Cool, I have dabbled with React recently and enjoyed it a lot. I've also heard a lot of good things about GraphQL so definitely interested in learning it.

With those things in mind, I decided to partake in the personal site hashtag #newwwyear:

1. Starting right now (12/23)
2. Migrate (and redesign) personal site from Jekyll to Gatsby
3. Deadline: January 1st

Okay, let's keep this post short...

#### Day 1: Design/Content

For the design, my goal was to keep the layout simple/clean and to reduce the non-blog content. According to Google Analytics, my blog posts get the most hits. So, this led to me making the recent posts available from the home page.

My site visitors are quite often either devs or recruiters. What do they really need to see? A small snippet about myself, **most recent/relevant** work with images, and an area for blog posts. 

In the last version of my site, I had a page with most of my work listed along with screenshots of each site. However, most of it was from when I worked at agencies over 4 years ago so static marketing pages or custom WordPress themes. For recruiters, I'd rather they see single page applications and more JavaScript-oriented projects. Unfortunately, it's limited as I've worked on internal tools a bit in the past 4 years. However, I think what I do have to show is a bit more telling of my skills than something from 4 or 5 years ago.

#### Day 2/3: Development

Getting started with Gatsby is pretty simple as it has different starters to choose from. I went with the default one because I felt I could keep the development pretty simple. One homepage with all non-blog content, a blog archive page, and a template for blog posts to use. 

I moved over my markdown files from my Jekyll blog. I'd say the majority of my development time came from tinkering with the config and node files to get the markdown files to render. I temporarily have removed the comments section because I am still thinking about if I really need that at all.

(A post about migrating from Jekyll to Gatsby is currently being drafted.)

#### Day 4: Deploy!

I've been using GitHub pages to host my site for a couple years now and have really enjoyed it. This time, though, I decided to use the <span class="code-inline">gh-pages</span> package to be able to deploy the prod build straight from my terminal. 

And you know, that's how you're reading this. 