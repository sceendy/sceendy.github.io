---
title: 'Daily tasks (with AI)'
description: 'how I use AI in 2026'
pubDate: 'July 3, 2026'
heroImage: '../../assets/switzerland.png'
---

Over the past year, as y'all could guess, my job has evolved due to AI (LLMs).

I started the way most frontend engineers probably did: using it for what I consider basic chores such as writing unit tests or evaluate specific code blocks I wrote myself.

Unfortunately, before I got much deeper with it, while reviewing other pull requests, I saw many instances where its output was not being modified at all so within the context, it was just gross and just didn't 'fit' well. It may have essentially accomplished the expected end result but similar to copy/pasting StackOverflow code snippets, it clearly stuck out. 

Now I know that it was just poor prompting (not specifying rules/patterns/etc) but it made me question the quality for a while.

Luckily, I found an opportunity with a recent project I had delivered at my job. I had hooked up our design system components with Figmas Code Connect.  At the time, it felt like an overall small lift with potential great benefit. All the feature engs get Figma links with our features and now we could easily identify which components already exist and how to properly use them without going outside of Figma. Coincidentally, staff/principal engineers at the company had also started adding AI skills and knowledge to our codebase around this time. One of which could use the code connect files I had just introduced to beef up what AI could deliver more accurately.

(YES, I think the Claude Design and Figma situation is messed up. This experience was before Claude Design was released, fwiw.)

I wanted to see how well it was delivering so on my feature team, I'd get our new designs and have it build a new page to test the usage of our components. I'd keep calibrating the output to find how it'd provide better results. It was fun - not perfect but it definitely could cut down on some boilerplate spin-up time. Awesome - from there, I gradually started trying more.

I'm still very much validating and refining the outputs but really, I'm seeing my improved prompting making a real difference. All that being said, here are some examples of what has changed for me (as someone that has been writing code since 2003.)

This isn't an depth post about my prompting strategy or how I think every software engineer should use it. I've just found it to be helpful in a lot of the core areas I work in daily and wanted to share.

Note: I could see myself utilizing AI more on existing features for refactors, tackling tech debt, bug fixing, and enhancements. My teams' current work doesn't involve much of that, though.

## chores: basic tasks that have established patterns

When we were first encouraged to use AI, 'chores' were the first things I felt confident would be easy to take off my plate. I already felt like how I wrote them myself could be automated years before so it seemed like a good start.

The first few times, I guided it with how I prefer the unit tests... what I like to include/cover and how. Ultimately, as long as it's covering the code block, it's pretty straight-forward but I clean it up a little.

Next up, code reviews. It's not perfect and I **WOULD NOT** want it to count as an pull request approver... but it _can_  flag issues/bugs and make valuable suggestions. It can verify that specific tasks are complete. This is especially valuable if your team typically waits until the second half of the sprint to review but you finished your work within the first half and need to fix significant things before real eyes get on it.

Finally, I have used it to refactor some code I had been wanting to improve/clean up for a few weeks. My team had just delivered a new feature to production and I didn't want to disrupt other teams testing it so I had put off this refactor until after launch. I had a good idea of what needed to happen and how it'd generally work so I guided it through my ideas and requested feedback/alternative solutions as we went through it. I was happy with the result and I got to it much quicker than if I hadn't used Claude Code. 

## /plan: organizing my thoughts

This is where I find it to be the most useful! I often gravitate towards `/plan` mode for complex work to gather and get some quick feedback on my thoughts. I suppose in a way, it's an enhanced, modified rubber duck - this one can process the strategy and use context to provide feedback. 

I've worked on a lot of the codebase, tbh, so I have felt like I have a good sense of existing patterns/components/logic but prefer to verify with Claude Code that things will work as I expect. 


## faster testing + faster failing = better improvements

I'm not super great at changing context - or at least in an AI era, it feels like we are expected to do it quicker/better.

I like to have Claude Code up during meetings to verify a quick plan being discussed or have it confirm something works as I think it should/will. As team lead, I get pulled into more meetings than most. After meetings, I can quickly test solutions and narrow down to the best one for our use case. It gets me to a proof of concept quicker since it already has the context. Claude Code just gets me there faster. To be fair, my own knowledge is the starting point which I already trust. 💁🏻‍♀️

If I'm doing a spike or planning for more complex work, I dive into researching and use Claude Code to fill gaps and connect points. This also often means gathering links for documentation or reviewing API contracts so I'll make sure Claude has any context needed to come up with a plan. The more it has, the better output.

## the gist

I've been describing the use of AI by software engineers as a game of Mario Kart. Some people think it makes you Bullet Bill for the whole race. Nah. You might get a speed boost - you might even get to be Bullet Bill for a few seconds - but there are bananas you'll slip on (self-inflicted or not.) So, you just have to find the balance to accomplish what you want/need.

As you can tell, this was written by my silly brain, no AI :)