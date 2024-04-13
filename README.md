# Calm down

Welcome to my second project, the Europe quiz website is a landing page for people who like quizzes and are motivated to test or improve their knowledge about European countries.

<img src="" alt="image shows responisveness by presenting preview on different devices">

## Features

### Navigation

The user is able to navigate on the navigation bar. The quiz is the most prominent featuere therefor, it appears already on the landing apge.
There are three navigation elements according to the three pages Quiz, Highscore and About. Due to responsive design requiremets the behaviour and position of the navigation bar is slightly different.

Mobile view: Elements are aligned to the center. Toggle is used...


Tablet view: Logo on the left site, navigation elements on the right site.

Desktop view: Logo on the left site, navigation elements on the right site. Hover-effect is implemented. 

There are three media query breakpoints used: (320px), 768px, 992px

#### Desktop view
<img src="" alt="image shows navigation desktop">

#### Tablet view
<img src="" alt="image shows navigation tablet">

#### Mobile view
<img src="" alt="image shows navigation mobile">

### The header 
Title and logo are above the navigation. Depending on the media query the header gets bigger. The font-size/size of title and logo increases. The header's height is around XX px, therefore. there is a margin-top value of 97px for the main element.

Header
<img src="" alt="image shows header">

### quiz.html
The landing page contains a short introduction and the first question of the quiz.

quiz.html
<img src="" alt="image shows preview of why.html">

### highscore.html


highscroe.html
<img src="" alt="image shows preview of how.html">

### about.html


about.html
<img src="" alt="image shows preview of who.html">


### The Footer
The footer contains a link to the creator's GitHub and Linkedin link. 


## UX Design
Colorful, plain and simple design. Show a map in the background to introduce the user to the topic - it's geography. The colors of a classic map are used.

 The design was created as a series of wireframes covering mobile, tablet and desktop to determine the initial design and layout of the site.


### Color Scheme
The colors used are mostlly aligned with the background and typical colors used on a map. Blue for water, beige for landscape and red, grey for cities and borders. The text color is dark grey and black to provide a userfriendly contrast.

- backgrounds #ffffff, #fce89a

- water blue: #79c9e7, #a6dbef, #58afd9
- land green #a0cf50, beige #fad27f, brown #c0643d
- accents #
- logo, illustrations #
- font color #252525, #000000 #918e8e

### Typography

- I used the Google Font called ''
- Font Awesome icons were used, for GitHub links in the footer
- further icons/ illustrations used from [Freepik.com ](https://www.freepik.com/) and [Picjumbo.com](https://picjumbo.com/)


## User Stories

### New Site Users

- As a new user, I would like to know what the site is about, so that I understand what the site does
- As a new user, I would like to start a quiz
- As a new user, I would like to receive a highscore
- As a new user, I would like to change the mode between asking for capitals or asking for countries

### Returning Site Users

- As a returning user, I would like to compare my highscore with other users
- As a new user, I would like to adjust the level of dificulty

## Wireframes
Wireframes were developed for mobile, tablet, and desktop sizes by using Balsamiq.

### Mobile Wireframes

<img src="" alt="image shows wireframe of index.html">
<img src="" alt="image shows wireframe of highscore.html">

### Tablet Wireframes

<img src="" alt="image shows wireframe of index.html">
<img src="" alt="image shows wireframe of highscore.html">

### Desktop Wireframes

<img src="" alt="image shows wireframe of index.html">
<img src="" alt="image shows wireframe of highscore.html">


## Testing
- Testing was done in small breaks during the development and at the end of the project
- Validators have been used
- small feature checks has been made by using preview and the devtools device toolbar
- Tests are done in different browsers such as Edge, Chrome and Firefox
- Responsivness is tested with different screen sizes by using devtools device toolbar
- navigation, header and content of all subpages is readable and easy to understand
- the audio files are working, the voice is understandable and autoplay is deactivated when the page is opened


### Bugs
Some adjustment has been necessary i.e. the flex features haven't been working correctly due to wrong values. I.e. typos caused problems with css definitions.

id="menu_meditations":
Due to header fixation the anchor has to be placed to another section (more above). Same problem appears when the sub-navigation is used an the user wants to jump to i.e. the body scan meditation. The header covers the audio player, the user has to scroll up a bit. To fix this issue a hidden anchor was added.

id="logo-size":
Id selector is used multiple times, therefore the elemt type id is not valid. The elemt is transferred into a class element.

Due to a bad performance via Lighthouse the images have been compressed via [tiny.com](https://tinypng.com/)


### Validator Testing
Validator testing has been done on:

#### [HTML validator](https://validator.w3.org/)

No errors were returned

<img src="images_readme/html_validator_index.PNG" alt="image shows preview of who.html">

<details>
    <summary>Subpages</summary>

<img src="images_readme/html_validator_how.PNG" alt="image shows preview of who.html">

<img src="images_readme/html_validator_who.PNG" alt="image shows preview of who.html">

</details>

#### [CSS validator](https://jigsaw.w3.org/css-validator/)

No errors were returned

<img src="images_readme/css_validator.PNG" alt="image shows preview of who.html">

#### Accessability
I confirm that the selected colors and fonts are easy to read and accessible by using Lighthouse in devtools (Chrome).

<img src="images_readme/Lighthouse_analysis_index_03.04.2023.PNG" alt="image shows Lighthouse result">

### Unfixed Bugs
No unfixed bugs.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Main Branch, then click "Save"
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.


Here the live link: https://fl0w97.github.io/CI_p1_meditation-_website/index.html

<details>
    <summary>Cloning repository</summary>

1. Visit the GitHub repository.
2. Find the Code button situated above the file list and give it a click.
3. Choose your preferred cloning method — whether it's HTTPS, SSH, or GitHub and hit the copy button to copy the URL to your clipboard.
4. Launch Git Bash or Terminal.
5. Navigate to the directory where you want the cloned directory to reside.
6. In your IDE Terminal, input the following command to clone the repository:
 git clone https://github.com/Fl0W97/CI_p1_meditation-_website.git
7. Press Enter to create your local clone.

</details>


## Tools & Technologies used

- HTML used for the main site content
- CSS used for the main site design and layout
- CSS root variables used for reusable styles throughout the site
- CSS Flexbox used for an enhanced responsive layout
- Git used for version control (git status, git add, git commit)
- GitHub used for secure online code storage
- GitHub Pages used for hosting the deployed front-end site
- Gitpod used for local IDE for development
- [Balsamiq](https://balsamiq.com/wireframes/desktop) used for creating Wireframes
- [Color generator](http://colormind.io/) used for choosing the correct HEX code
- [Favicon.io](https://favicon.io/) used to create the favicon
- [Google Fonts](https://fonts.google.com/) used to search a suitable font and using it
- [Font Awesome](https://fontawesome.com/) used for logo designs (Linkedin, Youtube and GitHub)
- [Tinypng](https://tinypng.com/) used for reducing image size


## Credits

### Media

<details>
    <summary>icons/ illustrations and images used from [Freepik.com ](https://www.freepik.com/) and [Picjumbo.com](https://picjumbo.com/)</summary>

#### Images for reasons

- https://www.freepik.com/icon/peace_9344997
- https://www.freepik.com/icon/friend_10879075
- https://www.freepik.com/icon/target_566958
- https://www.freepik.com/icon/overwhelmed_6210111
- https://www.freepik.com/icon/pain_6210132

#### Image for meditations etc

- https://www.freepik.com/icon/boiling_2478676
- https://www.freepik.com/icon/mindfulness_11245449
- https://www.freepik.com/icon/one-man-walking_76865
- https://www.freepik.com/icon/circle-arrows_7893895
- https://www.freepik.com/icon/body-scan_10890662

#### Image hero image

- https://picjumbo.com/download=woman-meditating-on-wooden-platform-with-amazing-scenery-view-free-photo.jpg&n=woman-meditating-on-wooden-platform-with-amazing-scenery-view&id=1

#### Background image

- https://i0.wp.com/picjumbo.com/wp-content/uploads/romantic-fall-scenery-countryside-road-in-foggy-autumn-morning-free-photo.jpg?w=2210&quality=70

#### Logo Calm down

- https://www.istockphoto.com/de/vektor/abstrakte-pyramide-der-lebensbalance-suche-mit-anpassung-des-mentalen-und-gm1353485594-428574758

#### Photo of the author Chade-Meng Tan
- https://community.thriveglobal.com/wp-content/uploads/2017/08/20120201_1_0032.jpg

</details>


#### All audio files are recorded by the website creator.


### Content

- Book 'Search Inside Yourself by Chade-Meng Tan
- https://www.helpguide.org/meditations/guided-imagery-meditation.htm
- https://www.mindful.org/how-to-meditate/
- https://siyli.org/check-out-siylis-new-look/
- https://www.headspace.com/
- Support in text formulating [ChatGPT](https://chat.openai.com/) 


### Code

| Description  | Source | URL |
| ------------- | ------------- | ------------- |
| Flex:box logic for responisive navigation and content.  | Code Institute, Course Love Running Project | [https://learn.codeinstitute.net](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LRFX101+2/courseware/e805068059af42af87681032aa64053f/7525117e5cd144daa2a7b0c57843bbee/)
| Audio feature  | w3schools  | https://www.w3schools.com/tags/tag_audio.asp
| Fix anchor | Forum Stackoverflow  | https://stackoverflow.com/questions/10732690offsetting-an-html-anchor-to-adjust-for-fixed-header
| Scroll smooth feature  | w3schools  | https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
| Generate Markdown file  | GitHUb | https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax