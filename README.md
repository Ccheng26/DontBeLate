##  Don't Be Late

**User Stories**

As a player. I want a game that reflects how I can go about my morning so I can avoid pitfalls in poor time management!

**Minimum Viable Product**

Original MVP: Player has to get collect objects and get from point A to point B
This game initially started out with two stages:
* a point and click game
* collision detection game

The second one didn't happen.

**Final MVP**: Player has to collect all objects within a set time frame. If timer runs out, player loses; if all objects are collected, player wins.


**Technologies Used**:
* HTML: to render the game in browser and create divs for each item
* CSS: to display the images in the game, position items, and make it look better
* JavaScript: overall functionality of the game. Used for checking win/loss options, navigating the rooms via hiding/showing divs, appending classes, if statements and more
* White boards: pseudo coding and wireframing
* Gliffy: wireframing
* GitHub: making the site live and setting up repositories to go back to previous work
* Google Chrome Browser: displaying the page and constantly using Developer Tools for debugging

**The Approach Taken**:
* Pseudo code, game flow and wireframing (initial variations of these can be found in repository under idea project 1.rtf and wireframe.png)
* Created seperate containers for items; highlighted place holders (via CSS and HTML) to get an idea of positioning
* JavaScript variable creation; 
 * start with item selection and variable definition
 * created randomization function to change location of hidden objects each time you start the game
 * generate various if statements to check if conditions are met, e.g., user loses when the timer runs out and all items aren't found, user wins if all items are found and the timer hasn't hit zero, items won't be taken if an object isn't found
 * set up timer
* Delete unnecessary items (I initially had an object in a div for everything, this was removed for positioning reasons)
* Uploaded respository to github via instructions in DemoDeploy repository

**Installation Instructions**
* N/A this is a browser based game so you won't need to install anything!

**Unsolved Problems**
* Shortening the code was a major issue. Snippets of attempts at cleaning up my code can be found inside the script.js file. While I was attempting to shorten the show and obtain item functions with a for loop, things went haywire.

**Best Laid Plans...**

The initial game involved using the keyboard to navigate an avatar around the screen using the arrow keys. It also included appending items to said avatar such as pants and a jacket for additional inventory space. It also involved additional conditionals for doing this in order, item priority, a feature to slow down the timer and an extra game stage. Under time constraints this did not happen.

Special Thanks to various students, instructors, and instructional assistants at GA who've tested my game and helped with code revisions along the way. This game wouldn't have been possible without their help and the ridiculous amount of things I've learned from the previous homework assignments.


