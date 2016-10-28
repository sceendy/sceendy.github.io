---
layout: page
title: Work
permalink: /work/
---
<div class="row top-space">
  {% for work in site.data.work %}
    <a class="work" href="{{ work.link }}" target="_blank">
      <div class="row row__items--center">
        <div class="col-sm-6 col-xs-12">
          <img src="/assets/work/{{work.img}}" alt="Join'em" />
        </div>
        <div class="col-sm-6 col-xs-12">
          <section>
            <h4>{{ work.name }}</h4>
            {% for tag in work.tags %}
              <div class="tags">{{ tag.name }}</div>
            {% endfor %}
          </section>
          <p class="summary">
          <strong>Details:</strong> {{ work.description }}</p>
        </div>
      </div>
    </a>
  {% endfor %}
</div>
