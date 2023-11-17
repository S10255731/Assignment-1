# Dota2 Wiki

This website is an official wiki for Dota2. Dota2 is a multiplayer online battle arena (MOBA) game by valve, and is the sequel to its predecessor Dota. This website serves to document information about the game, including game mechanics, updates, characters and more. It aims to allow players to have convenient access to information about the game and community-made content. 

Currently, the [official dota2](https://www.dota2.com/home) website only contains information about the hereoes, and the [unofficial dota2 wiki](https://dota2.fandom.com/wiki/Dota_2_Wiki) is under maintained and lacking in its user experience. This is because the unofficial wiki is built on fandom, which limits the design options. Hence, this website aims to replace the unofficial wiki and supplement the main website for in-game information. Being an official website, it is expected to be managed by Valve itself, which ensures that its content is accurate and up to date. It also comes with improvements to user-experience, such as more flexible designs and a notable lack of advertisments, which plagues the unofficial wiki.

## Design Process
 
The goal of the design was to make a minimalistic wiki with organised content. I also wanted to keep the colour scheme and design elements similar to the main website.

##### The home page serves as the introductory page for the website. I decided to include recent game patches and upcoming content. 
- Since updates occur every few weeks, as a returning user, I want to quickly find any recent updates to the game so I know what is new.

##### The heroes page is as a list of all the heroes in the game for users to navigate to. I decided on having a list of heroes as well as filters.
- As a user who is unfamiliar with the website, I want to easily be able to search and filter heroes to easily find them

##### For the hero information page (drow ranger page), I decided on using a table-style design. This makes the content more organised.
- As a user who is curious about the hero's information, I want to be able to quickly locate different sections of information in an easy-to-understand manner.


### Wireframes
1. A figma high-fidelity wireframe can be found [here](https://www.figma.com/file/z5IDi21uUzYACzDcgAW1j6/FED-S10255731-Assignment-1) or in this respository as a pdf

2. The adobe XD file can also be found in this respository

## Features

 
### Existing Features
- Feature 1 - allows users to easily find the hero, by implementing a filter and search system
- Feature 2 - allow users to conveniently navigate to different main sections of the website, using a top navigation bar
- Feature 3 - allow users to view the stats for heroes at different levels, using a tab


### Features Left to Implement

#### Home page
Add new pages for the different patches
#### Heroes Page
- Additional filter for heroes based on complexity (each hero has a complexity value from 1-3, indicating its difficulty to use)
- Add the remaining heroes to the heros page

#### Drow Ranger Page
Add extra tabs for other hero-specific content such as guides, strategies and changes

#### Other
- Add a login/signup + account system to manage user previliges and ensure accountability
- Allow users to make their own guides
- Add the community page which includes links to other social platforms
- Add the armory page which includes information for items and cosmetics
- Make pages for each hero


## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

1. Navigation:
    1. Using the top navigation bar, click the "heroes" option. It should bring the user to the heroes page
    2. Clicking the dota2 icon should bring the user to the home page


2. Filtering heroes
    1. Go to the heroes page
    2. Use the attribute buttons to filter heroes based on attributes. It should only show heroes that have said attribute
    3. Use the search bar to search for heroes. Only heroes that match the input substring should show
    4. The attribute filter should work alongside the search filter. For example, if the blue (intelligence) attribute is selected, and the character "m" is entered into the search bar, only the hero "muerta" should be shown. This is because muerta is the only intelligence hero with the letter "m" in her name

3. Going to hero's page
    1. Go to the heroes page
    2. Click on drow ranger
    3. It should redirect the user to the drow ranger page

4. Viewing different level stats
    1. Go to the drow ranger page
    2. In the "level stats" section, click the different numbers (representing levels)
    3. The value of the stats in that section should change accordingly

### Bugs
    1. The use of @media and vw unit means that the website does not work well on old browsers. Tested with internet explorer.
    2. The website does not work well with browsers' built-in zoom feature. (It does not actually zoom in). I am unsure what the cause is, however I believe it is caused by the use of % and vw as units for almost all elements


## Credits

### Content
- The subtitle for the "heroes" page was obtained from [Dota2's hero page](https://www.dota2.com/heroes)
- The content for the drow ranger page was obtained from [Dota2 Wiki Drow Ranger](https://dota2.fandom.com/wiki/Drow_Ranger)

### Media
- All photos used in this site were obtained from [The Official Dota2 website](https://www.dota2.com)
- Thumbnails for the update posts were edited with [Cleanup.pictures](https://cleanup.pictures/)
- Icons were obtained from [Coolicons](https://www.figma.com/community/file/800815864899415771/coolicons-free-iconset) and [Iconly 2](https://www.figma.com/community/file/996610000954670629)

### Acknowledgements

- I received inspiration for this project from 
    1. [Prydwen.gg - Honkai: Star Rail wiki and database](https://www.prydwen.gg/star-rail/)
    2. [Official dota2 website](www.dota2.com) 
    3. [David Nathaniel's Honkai Star Rail Wiki & Database](https://dribbble.com/shots/22782088-Honkai-Star-Rail-Wiki-Database) 
- The code for the top nav bar was modified from [Kevin Powell](https://www.youtube.com/watch?v=8QKOaTYvYUA)
