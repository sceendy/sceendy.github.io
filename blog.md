---
layout: page
title: Blog
permalink: /blog/
---
<div class="row">
  {% for post in site.posts %}
  <a class="blog-entry col-md-12 col-xs-12" href="{{ post.url | prepend: site.baseurl }}">
    <h4>{{ post.title }}</h4>
    <time class="small">{{ post.date | date: "%b %-d, %Y" }}</time>
    <p class="summary">{{ post.content | strip_html | truncatewords:75 }}</p>
    <small><strong>related to:</strong> <span ng-repeat="label in post.labels">{{ label }}<span ng-if="!$last"> + </span></span></small>
  </a>
  {% endfor %}
</div>
