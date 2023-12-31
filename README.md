# Dota2 Wiki

This website is an official wiki for Dota2. Dota2 is a multiplayer online battle arena (MOBA) game by valve, and is the sequel to its predecessor Dota. This website serves to document information about the game, including game mechanics, updates, characters and more. It aims to allow players to have convenient access to information about the game and community-made content. 

Currently, the [official dota2](https://www.dota2.com/home) website only contains information about the hereoes, and the [unofficial dota2 wiki](https://dota2.fandom.com/wiki/Dota_2_Wiki) is under maintained and lacking in its user experience. Hence, this website aims to replace the unofficial wiki and supplement the main website for in-game information. Being an official website, it is expected to be managed by Valve itself, which ensures that its content is accurate and up to date. This website will be managed by both the community and the company. Users can apply to be a contributor, which gives them permission to edit articles and post guides. Moderators will be from Valve itself, making sure information is up-to-date and relevant, while guides are up to standards.

## Notes for this README

The three pages of drow ranger, bane and chaos knight will be categorised and referred to as the "hero information" page

## Design Process
 
The goal of the design was to make a minimalistic wiki with organised content. I also wanted to keep the colour scheme and design elements similar to the main website. Despite the design of the official website and unofficial wiki, I wanted to go for a "softer look", with rounded corners, curlier fonts, etc. I found that this style of website worked best at making wikis that were both organised and aesthetic, although the inheritely dull assets of Dota2 still kept the website to a similar feel as the others. 

##### The home page serves as the introductory page for the website. I decided to include recent game patches, upcoming content., recently changed pages and trending guides. The top contributor list serves as a way to recognise users who actively contribute to the website.

- As a new user, I want to know what this website is about.
- As a returning user, I want to quickly find any recent updates to the game so I can stay up to date. I also want to know any new trends with the game.

I used an image as the background to make the page more vibrant, and drop shadows for the different section containers to make them stand out more against the background


##### The heroes page is as a list of all the heroes in the game for users to navigate to. I decided on having a list of heroes as well as filters.
- As a user who is unfamiliar with the website, I want to easily be able to search and filter heroes to easily find them

The filters were layed out to take up the available horizontal area to make it easier to view in one look. Roles have different colours associated with them to add a visual difference between them. The heroes were arranged in a grid format as it is compact and organised

##### For the hero information page, it contains the hero's name, stats, skills, talents and an image
- As a user who is curious about the hero's information, I want to be able to quickly locate different sections of information in an easy-to-understand manner.

I decided on using a table-style design. This makes the content more organised. The background colour also depends on the primary colours of the hero itself, and theres a slight gradiant to it. This makes the page more colourful


### Wireframes
1. A figma high-fidelity wireframe can be found [here](https://www.figma.com/file/z5IDi21uUzYACzDcgAW1j6/FED-S10255731-Assignment-1) or in this respository as a pdf

2. The adobe XD file can also be found in this respository

## Features

 
### Existing Features
- Feature 1 - allows users to easily find the hero, by implementing a filter and search system
- Feature 2 - allow users to conveniently navigate to different main sections of the website, using a top navigation bar
- Feature 3 - allow users to view the stats for heroes at different levels, using a tab
- Feature 4 - navigation bar changes based on mobile/desktop view


### Features Left to Implement

#### Home page
 - Add new pages for the recent updates/recent updates/trending guides/ to link to
#### Heroes Page
- Additional filter for heroes based on complexity (each hero has a complexity value from 1-3, indicating its difficulty to use)
- Add the remaining heroes to the heros page

#### Hero-information Page
- Add extra tabs for other hero-specific content such as guides, strategies and changes

#### Other
- Add a login/signup + account system to manage user previliges and ensure accountability
- Allow users to make their own guides
- Add the community page which includes links to other social platforms
- Add the armory page which includes information for items and cosmetics
- Make pages for each hero



## Testing

1. Navigation:
    1. For mobile only, clicking on the hamburger menu should open up a list of pages
    2. Using the top navigation bar, click the "heroes" option. It should bring the user to the heroes page
    3. From the heroes page, clicking on bane, chaos knight and drow ranger should direct the user to the respective hero information page
    4. From any page, clicking the dota2 icon should bring the user to the home page


2. Filtering heroes
    1. Go to the heroes page
    2. Use the attribute buttons to filter heroes based on attributes. It should only show heroes that have said attribute
    3. Use the search bar to search for heroes. Only heroes that match the input substring should show
    4. Use the multi-select role buttons to filter heroes based on their roles. It should only show heroes that have the roles. When all buttons are unselected, all heroes should show (assuming no other filters are affecting it)
    5. All 3 filters should work together.  Heroes shown should meet all the conditions of the role, attributes and search bar filters. For example, if intelligence (blue) attribute is selected and disabler role is selected, only intelligence heroes with a disabler role will show. 

4. Viewing different level stats
    1. Go to the hero information page
    2. In the "level stats" section, click the different numbers (representing levels)
    3. The value of the stats in that section should change accordingly

### Bugs

    1. The use of @media and vw unit means that the website does not work well on old browsers. Tested with internet explorer.
    2. The website does not work well with browsers' built-in zoom feature. (It does not actually zoom in). I am unsure what the cause is, however I believe it is caused by the use of % and vw as units for almost all elements


## Credits

### Content
- The subtitle for the "heroes" page was obtained from [Dota2's hero page](https://www.dota2.com/heroes)
- The content for the hero information page was obtained from [Dota2 Wiki Drow Ranger](https://dota2.fandom.com/wiki/Drow_Ranger), [Dota2 Wiki Bane](https://dota2.fandom.com/wiki/Bane), [Dota2 Wiki Chaos Knight](https://dota2.fandom.com/wiki/Chaos_Knight)


### Media
- Hand of midas was obtained from [redbubble](https://www.redbubble.com/i/photographic-print/Hand-of-Midas-by-alexpng/40267233.6Q0TX)
- Divine Rapier was obtained from [toppng](https://toppng.com/free-image/dota2-sticker-items-dota-2-divine-PNG-free-PNG-Images_210164)
- Nurosy's profile picture was from [Dota2 wiki](https://dota2.fandom.com/wiki/Drow_Ranger/Lore#Main)
- Clash Royale king laughing from [Know your meme](https://knowyourmeme.com/memes/clash-royale-king-laughing-he-he-he-haw)
- Icons were obtained from [Coolicons](https://www.figma.com/community/file/800815864899415771/coolicons-free-iconset) and [Iconly 2](https://www.figma.com/community/file/996610000954670629)
- All other photos were obtained from [Dota2 website](https://www.dota2.com)
- Thumbnails for the update posts were edited with [Cleanup.pictures](https://cleanup.pictures/)


### Acknowledgements

- I received inspiration for this project from 
    1. [Prydwen.gg - Honkai: Star Rail wiki and database](https://www.prydwen.gg/star-rail/)
    2. [Official dota2 website](www.dota2.com) 
    3. [David Nathaniel's Honkai Star Rail Wiki & Database](https://dribbble.com/shots/22782088-Honkai-Star-Rail-Wiki-Database)
    4. [Genshin Impact Wiki](https://wiki.hoyolab.com/pc/genshin/home) 
- The code for the top nav bar was modified from [Kevin Powell](https://www.youtube.com/watch?v=8QKOaTYvYUA)
