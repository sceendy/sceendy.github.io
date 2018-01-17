---
layout: post
title:  "new project: atx paw finder"
date:   2018-01-17 17:10:00
tags: ['dev', 'news', 'projects']
---

<p>
Recently, I was looking around at tools made available by the City of Austin as well as some data that they have made available. I stumbled upon this page: <a href="https://data.austintexas.gov/Health-and-Community-Services/Austin-Animal-Center-Found-Pets-Map/hye6-gvq2" target="_blank" rel="noopener">Austin Animal Center Found Pets Map</a>, screenshot below.
</p>

<p>
  <img src="https://i.imgur.com/rbZTkyz.png" title="official austin animal center"/>
</p>

<p>When you first land on that page, you might find the design underwhelming... especially if you're a designer. Despite having filtering functionality, you may have missed it on first glance which is unfortunate because it allows for plenty options to narrow your search. As someone that has lost a pet before, I thought about how much I would have found a tool like this helpful back then. How would I use it if I lost my dog today?</p>

<p>I decided to see what I could do to make the filtering a bit less of a headache. For that, I can focus on the most likely user scenario: If I just lost my dog, I don't really need to see a list of over 100 dogs and cats, right? I just want to see dogs. Next, my dog is an intact male. Cool, that brings the search results down from 146 to 35. That's much less overwhelming especially since I'm probably pretty vulnerable at that moment.</p>

<p>I wanted the map to have all the markers on it but only show 4 pets in the list at a time. The option to only show markers from the 4 list pets did cross my mind but I didn't think it'd really be that helpful at this momemnt. I added some pagination to allow the user to cycle through the list, though.</p>

<p>While I know my dog could have wandered off from where I thought I lost him, I'd want to narrow down the scope of the area too. Once I zoom into that area, I want to be able to click on a marker to view an image of the dog found along with details. A picture, the possible breed and the date/location where it was found would be good to know right away. The rest of the details in the data are essentially just tag type of information.</p>

<p>Then, I applied a different style to the map that would allow for some colorful, cute looking <a href="https://www.sketchappsources.com/free-source/1293-animal-icons-sketch-freebie-resource.html" alt="cute animal icon set" rel="noopener">icons</a> to serve as better map markers.</p>

<p>With those things in mind, I rebuilt the tool in a way that I thought would be more helpful.</p>

<p><img src="https://i.imgur.com/d3Zp1CL.png" title="ATX Paw Finder" /></p>
<p class="u--text-center">
built using angular, bulma, google maps api, austin open data<br/>
  <a href="https://github.com/sceendy/atx-paw-finder" target="_blank" rel="noopener">Repo</a> | <a href="https://sceendy.com/atx-paw-finder/">Live Site</a>
</p>