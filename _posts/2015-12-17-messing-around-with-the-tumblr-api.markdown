---
layout: post
title:  "Messing around with the Tumblr API"
date:   2014-12-17 16:46:30
categories: angular api code
---


In order to avoid managing a blog myself, I wanted to try out handling my blogging with the Tumblr API. I figured it'd be easier to keep up with and leave out any complexity from integrating a blog onto my actual site. It's easier just to hit up some API endpoints with ngResource since I'm using Angular.<br />
<br />
This was actually the first time I set up a site to reach out to some API endpoints so I thought I could write a little about my experience.<br />
Tumblr's API documentation is quite simple to understand and allowed for me to get it all hooked up within an hour. I got an OAuth Key and then used Angulars' ngResource to point to their API and get it to return the JSON.<br />
<code>var url = "http://api.tumblr.com/v2/blog/"+ blog_url + "/posts/text?api_key=" + api_key + '&amp;limit=20';</code><br />
I placed made the blog_url and api_key variables for better visibility and I am not sure if I will keep the URL of the Tumblr I have had since 2009. At the end of the line, I limited the amount of posts to grab to 20 for now to see how I like it. Of course, on the front-end of the home page, I limitTo 4 posts and on the archive page I let it reach the limit set in the URL.<br />
<br />
Once I got that setup, I decide to make a little test in the console to make sure all was well.<br />
<code>_resource.test(function(data, $sce){ console.log('Tumblr status = '+ data.meta.status + ', msg = ' + data.meta.msg + ' for ' + data.response.blog.title);</code><br />
Which then returned the following:<br />
<img alt="image" src="https://31.media.tumblr.com/a0eb63c50643de3c12acdd599b86d9fe/tumblr_inline_ngl2qsOSMD1qzntgb.png" /><br />
Fantastic! That meant I was good to go ahead and call in some of the data.<br />
<strong>index.js:</strong><br />
<pre><code class="language-javascript">$scope.blog = data.response.posts;</code></pre>
<strong>page.html:</strong><br />
<pre><code class="language-javascript">&lt;div ng-repeat="blog in blog | limitTo : 4"&gt; /* grab up to 4 blog entries and repeat the data*/<br />{{blog.title}} /* so this returns data.response.posts.title */<br />&lt;/div&gt;</code></pre>
