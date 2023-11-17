# Dota2 Wiki

This website is an official wiki for Dota2. Dota2 is a multiplayer online battle arena (MOBA) game by valve, and is the sequel to its predecessor Dota. This website serves to document information about the game, including game mechanics, updates, characters and more. It aims to allow players to have convenient access to information about the game and community-made content. 

Currently, the [official dota2](https://www.dota2.com/home) website only contains information about the hereoes, and the [unofficial dota2 wiki](https://dota2.fandom.com/wiki/Dota_2_Wiki) is under maintained and lacking in its user experience. This is because the unofficial wiki is built on fandom, which limits the design options. Hence, this website aims to replace the unofficial wiki and supplement the main website for in-game information. Being an official website, it is expected to be managed by Valve itself, which ensures that its content is accurate and up to date. It also comes with improvements to user-experience, such as more flexible designs and a notable lack of advertisments, which plagues the unofficial wiki.

## Design Process
 
The goal of the design was to make a minimalistic wiki with organised content. I also wanted to keep the design style similar to the main website.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. 
These files should themselves either be included as a pdf file in the project itself (in an separate directory)
Include the Adobe XD wireframe as a folder. You can include the XD share url. 

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

#### Home page
Add new pages for the different patches
#### Heroes Page
Additional filter for heroes based on complexity (each hero has a complexity value from 1-3, indicating its difficulty to use)

#### Drow Ranger Page
Add extra tabs for other hero-specific content such as guides, strategies, counters, changes, etc


## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

1. Navigation:
    1. Using the top navigation bar, click the "heroes" option. It should bring the user to the heroes page
    2. Clicking the dota2 icon should bring the user to the home page


2. Filtering heroes
    1. Go to the heroes page
    2. Use the attribute buttons to filter heroes based on attributes. It should only show heroes that have said attribute
    3. Use the search bar to search for heroes. Only heroes that match the input as a substring should show
    4. The attribute filter should work alongside the search filter. For example, if the blue (intelligence) attribute is selected, and the character "m" is entered into the search bar, only the hero "muerta" should be shown. This is because muerta is the only intelligence hero with the letter "m" in her name

3. Going to hero's page
    1. Go to the heroes page
    2. Click on drow ranger
    3. It should redirect the user to the drow ranger page

4. Viewing different level stats
    1. Go to the drow ranger page
    2. In the "level stats" section, click the different numbers (representing levels)
    3. The value of the stats in that section should change accordingly

#### Bugs
    1. The use of @media and vw means that the website does not work well on old browsers. Tested with internet explorer


## Credits

### Content
- The subtitle for the "heroes" page was obtained from [Dota2's hero page](https://www.dota2.com/heroes)

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
