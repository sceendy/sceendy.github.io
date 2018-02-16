---
layout: post
title:  "frontend friday: design systems"
date:   2018-02-02 17:10:00
tags: ['dev', 'opinion', 'styleguides', 'process']
---

Often times I have jumped into teams as the sole front-end resource. And as is pretty common - inevitable even - new designers and full-stack/back-end developers will need to make adjustments to the front-end code. That's cool. I'll also see that they created a one-off class like <span class="code-inline">.click { cursor: pointer; }</span> which not only contributes to code bloat but also doesn't fit in with the content. And I begin to wonder where I went wrong in life.

Just kidding.

I understand wanting to push out some awesome, new feature quickly or trying to fix some alignment issue. Instead of playing the blame game, I've made it a habit to reduce those kinds of issues by including a design system with projects.

<blockquote>
One of the biggest headaches when leading digital design teams is ensuring consistency across all the products that a company owns. When so many departments are involved in day to day production of content, it’s really challenging to make sure that everyone conform to the same design patterns. A design system can provide a central set of guidelines that everyone can look at and apply. <br/>- <a href="https://runemadsen.com/talks/uxcampcph/" rel="noopener" target="_blank">Rune Madsen</a>
</blockquote>

A design system is a combination of reusable components and a set of standards for using those components. You can create one from an existing project or build one as you start a new project. One key thing, though, is getting everyone to see its' value and for contributors to help maintain it.

#### Step Zero: Pitch and get everyone on board

I like presenting the use of a <a href="http://bradfrost.com/blog/post/style-guide-driven-design-systems/" rel="noopener" target="_blank">design system</a> by stating that it makes it both easier and quicker to add new features to applications. It provides predictability, consistency, and makes for more rapid development. You want the people contributing to the design and/or codebase (designers + devs) to be the ones included in the process of both creating and maintaining the living styleguide.

#### Step One: Design Patterns

If you're wanting to add one to an existing project, designers can take an inventory on their reusable design patterns. Designs patterns are the UI elements that you reuse such as buttons, cards, and layouts. You might have different colored buttons for different actions or sections.

<blockquote>Design once. Reuse anywhere. Update easily.<br/> - <a href="https://www.sketchapp.com/" rel="noopener" target="_blank">Sketch website</a></blockquote>

These design patterns could have gotten started in <a href="https://www.sketchapp.com/" rel="noopener" target="_blank">Sketch</a> but they need to be living, usable UI components. That being said, you need people that can write clean, modular, reusable front-end code to build the styleguide. These components need to be things that any contributor can use to build a new thing. 

#### Step Two: The living styleguide

Luckily, setting up <a href="http://bradfrost.com/blog/post/style-guide-driven-design-systems/" rel="noopener" target="_blank">a living styleguide</a> doesn't have to be that time consuming - you can use one of many <a href="https://github.com/davidhund/styleguide-generators" rel="noopener" target="_blank">styleguide generators</a> that have pretty simple configurations. Just find one that fits well into your environment and into your flow. Looking through how they document would be super helpful as they mostly all have something similar to <a href="https://react-styleguidist.js.org/docs/documenting.html" rel="noopener" target="_blank">React Styleguidists' documenting page</a>.

I've typically used <a href="https://github.com/trulia/hologram" target="_blank" rel="noopener">Trulias' Hologram</a> since I usually already have Ruby installed and hey, it's markdown-based so pretty easy. For Hologram, all you have to do is comment in the SCSS file to provide context for a pattern and add an HTML snippet example on proper usage. Then, you generate it based on the latest styles. Most styleguide generators tend to work that way which is incredibly convenient to add to the flow whether it's a new or existing project.

It's not difficult to get in the habit of adding new patterns either. Once you have setup the configuration, you can begin to write styles for components and make a note of what context they should be used in. Personally, I prefer to write the HTML, write styles, and then often just copy/paste the first HTML snippet I had written of the pattern into the styleguide as the pattern example. No extra work required.

Once you have design patterns, you need to document how those patterns are used. A living styleguide can be an immensely powerful tool utilized by both designers and developers to produce consistent, beautiful, documented UI patterns.

Quick Example for documenting using Hologram:

````CSS
/*doc
---
title: Button
name: button
category: modules
---

[DESCRIPTION GOES HERE] Action buttons are used for form submissions or something....

```html_example
  <button type="submit" class="btn btn--action">Send Message</button>
```
*/

.btn {
  color: white;
  padding: 5px 10px;
  text-align: center;
}

.btn--action { background-color: tomato; }
````