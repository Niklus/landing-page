# Landing Page Project

This is the landing project for DOM Manipulation from Udacity. To start the project load the index.html
file to a browser.

## HTML

The HTML contains 4 content sections. The functionality of the website relies on these sections
to build the navigation menu by dynamically creating a menu based on the sections of the page.

At the bottom of the landing page there is also a simple subscription form that request a few pieces
of information from visitors: name, email and message.

## JavaScript

While navigating through the page, the section that is active in the viewport/closest to the top is distinguished from the other sections. This is done by making the section active or not active using the classList method add
and remove.

Clicking on a navigation item scrolls to the appropriate section of the page. The method scrollIntoView is used
to ensure smooth scrolling.

## CSS

The website is responsive across devices: smartphones, tablets and desktop. Theb navigatio bar adjusts to a
smaller size on smartphones to achieve this.
