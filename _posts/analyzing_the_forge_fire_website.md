---
title: Analyzing The Forge Fire Website
author: Mickey Beurskens
date: "2022-03-20"
summary: "The Lindy effect theorizes that non-perishable goods have life expectancy poportional to their current age. How does this effect software?"
img_path: /images/projects/card/ff_website.png
---

# Analyzing The Forge Fire Website

One of the best examples of Forge Fire web development projects has to be our own website! In this article I will explain some of the design considerations and technical aspects of the website. You can find the source [code of the website]() on GitHub, so you can take a look yourself.

## The Tech Stack

Choices, endless choices. The web development world contains more different technologies than any one developer can ever master. So which web technologies were used to build the website, and why?

First of some requirements:

> - The website can be simple, with the exception of showing posts like this one.
> - It should contain all relevant information that people want to know about when considering Forge Fire to do business.
> - It should be safe and very easy to maintain.

It was fairly easy to consider a static website for this purpose. It is simple to build, easy to maintain and there are a lot of technologies out there to make it easy to build and deploy. Many of those technologies are listed on [JamStack](https://jamstack.org/). The technology stacks there are all aimed at modern static website building and highly performant websites.

Since I recently completed a massive open online course (MOOC) on [full stack development]() I figured I would build using [React]().  The back end would consist of simple Markdown files and as a static build solution I ended up using [NextJS](). To make life a bit easier I also included [React Bootstrap]() so that I did not have to custom build components from the ground up. I ended up doing that anyway, but in a few places it ended up as a nice time saver. That means the technology stack now looks as follows:

{IMAGE}

## Design

A good design needs a starting point, and for this website the starting point is *color*. From that point onward the design was first laid out in [Figma](), before coding it up. Design by itself is already hard enough as it is, so splitting the build into a separate process later increased the efficiency of the process. The design ended up (after some iterations) looking like this:

![ff_website](/images/projects/card/ff_website.png)

It works quite well in light and dark theme, which was one of the goals. Now onwards to the build!

## Viva La Build

Modularity makes software life much easier. In this case the parts of the website have all been built as React components. This includes tiny elements like Buttons. It helps to keep style and functionality uniform. 

{IMAGE OF BUTTON AND CODE}

Styling is done using NextJS's [SASS]() module system. Using it makes it easy to separate styling for each component. It generates a unique prefix for CSS classes so that the styling in the module in only applied to the component in question. The styling also leverages SASS variables to make switching out colors and fonts straightforward.

Since this website also includes blog posts (like the one you are reading now ;)) it also includes a system to load [Markdown]() files. This is easily replaceable by a content management system, but this simple solution works well for now.

## Hosting

And thus the website was born. Nice and simple, handling all the prior requirements and easy to maintain. [Vercel](), the company developing NextJS, allows for easy hosting when using NextJS. However since I'd like to keep the hosting close to home for now (Netherlands), I resolved to [TransIP]() (not sponsored) for my hosting needs. Exporting the website using `next export` to a purely static format required not using the NextJS Image tags or choosing a different provider for image optimization. Since this website is so simple I opted for the former. 

The current setup needs a couple of manual steps to deploy the website, which is something I would like to automate in the future.

## Concluding

And thus the Forge Fire website is born! It does everything it needs to and even allows posts! The deployment process is a little cumbersome currently, but the design turned out great and maintenance is extremely low. If blogging becomes a larger part of the website I will probably rework the system a bit, but for now it works well and serves its purpose. 

