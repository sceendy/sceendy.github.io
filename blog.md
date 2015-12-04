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
    <p class="summary">{{ post.content | strip_html | truncatewords: 50 }}</p>
    <small><strong>related to:</strong>
    {% for tag in post.tags %}
     <span>{{ tag }} {% if forloop.last %} {%else%} +{% endif %}</span>
     {% endfor %}
    </small>
  </a>
  {% endfor %}
</div>
