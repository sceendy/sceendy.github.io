---
layout: post
title:  "Front-end Friday: Accessibility Tips"
date:   2021-03-12 18:00:00
tags: ['ui', 'dev', 'a11y']
---

For the past 5 years I have worked on projects that need to meet some accessibility standards (WCAG 2.0 A/AA). After interviewing several job candidates in that time, I think a lot of devs aren't aware that they don't need to wait for their company to require those standards be met. You can start to code with accessibility in mind in some pretty simple ways.

### Write Semantic HTML

After reviewing several code projects from job candidates over the past couple of years, I have noticed that semantic HTML isn't as common as I had thought. From junior to senior level front-end engineers, I see way too many divs. Write your HTML first - this makes you think about the structure first. Here's <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank">a list of HTML elements</a> - read through their descriptions and swap out your div tags today. Why? Structural/semantic HTML is THE starting point for accessibility because assistive devices rely on the DOM.

CSS is great but doesn't really matter to screen readers. Test your semantic HTML by disabling CSS - does your content still look organized and read as you intend it to?

- **Firefox**: View > Page Style > No Style

- **IE 11**: View > Style > No Style

- **Chrome**: Use a browser extension like <a href="https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh/related?hl=en-US" target="_blank">Wave</a>; toggle "Styles" off

*React tip: you can use Fragments to help group your content without adding extra nodes to the DOM.

### Tab around

Test your web page without a mouse. Users should be able to access all the interactive elements you need them to by using their keyboard. Interactive elements such as input fields and buttons will receive focus by default. Other elements such as `div`s usually don't need to be interacted with. However, if you need to bring focus or have a non-interactive element be tabbale, you may consider adding the `tabindex` attribute to your element or using `focus()` in your JS.

The order in which your items are accessibile depends on the DOM order. You can change the order using `tabindex`.

### Be considerate with dynamic content

Aside from using the `focus` method to set focus to elements manually, you can also ensure your dynamic content makes use of roles such as `status` and the `aria-live` attribute. 

The `aria-live` attribute has three values, `polite`, `assertive`, or `off` (off is the default.) An example would be if you have a list of items that can be filtered by the user. The container for that list should have `aria-live="polite"` so that when the list items update based on the filter, the update is announced when the user pauses. I personally haven't really felt the need to set it to `assertive` since that interrupts all other announcements.

Similarily, you have roles like `status` which works like a "polite" live region and `alert` which works like an "assertive" live region. For example, the status role could be used to notify a user that a change has been saved. You may use the alert role is used to announce critical information such as an error that needs immediate attention.
### Use browser tools and extensions

Most browsers now have Accessibility tools built right into their devtools. They can show you the color contrast, tab order or check for other common issues. There are two extensions/add-ons that I've enjoyed using in my development flow that tell you how to fix issues as well:

1. <a href="https://www.deque.com/axe/browser-extensions/" target="_blank">Axe browser extension</a> - This one adds a tab to your browser devtools.
2. <a href="https://wave.webaim.org/extension/" target="_blank">WAVE</a> - This tool renders on the left side of your browser.

___
### Stuff to check out

For much more in-depth explanations and examples, <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex" target="_blank">this W3C document</a> covers A LOT.

There's a <a href="https://www.a11yproject.com/checklist/" target="_blank">checklist</a> created by the A11y Project.