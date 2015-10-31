---
layout: post
title:  "Graceul Degradation"
date:   2014-12-17 16:46:30
tags: ['browser', 'css3']
---

My last job was at an agency - pretty standard front-end tasks and projects. We supported IE8+ since we had some pretty big client with thousands of page views a day with half of the traffic mostly coming from IE8 and IE9. Agencies typically prefer to support as many browsers as possible. One client in particular had us support as far back as IE6, though. They had a decent amount of hits coming from outside the US so it made sense. This is the first time I felt that wrath of IE6. Prior to that, my professional career had consisted of IE7+ support. However, while maintaining the website for that particular client, I learned plenty of useful things -- but most importantly: <b>graceful degradation</b>. <br />
During a recent discussion with another web developer, I recalled these moments where I knew a certain feature that IE6 couldn't handle would not take away from the site or from the overall experience. There are various ways to approach it but mostly you can identify it by just looking at it. <br />
<blockquote>
"Does not having this break anything on IE9? Does a user still know what is going on?"</blockquote>
I decided to make a little snippet to show a good example of how to go about this. In this example, I use CSS3 (linear-gradient) which is a no-go for IE9. However, IE9 can still display what the user needs to be able to view. It's a profile completion component - the same idea as LinkedIns' profile completion. The one on the left has a round progress bar and text beneath it. On the other hand, IE9 doesn't support linear-gradient so it would just show the text. Using linear-gradient doesn't break it and the user still has the context needed.<br />
<br />
<iframe allowfullscreen="allowfullscreen" frameborder="0" height="400" src="http://jsfiddle.net/sceendy/eoobqufw/embedded/result,js,html,css/" width="100%"></iframe>
