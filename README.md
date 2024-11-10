<img src="readmeAssets\Term4ProjectBanner.png">

[![npm version](https://img.shields.io/npm/v/@google-cloud/vision.svg)](https://www.npmjs.org/package/@google-cloud/vision)

<h1> IDEATION </h1>

<h3 align="center"> By Ungerer Hattingh </h3>

<p align="center">
  Ideation is an Idea generation app powered by Ai. In this Site you will be able to generate art ideas using key words as prompts for the ai (Azure Open AI). You can then upload your art ideas and have them analyzed by google clouds Vision api and post them for the world to see. 
</p>


# Ideation-Term4-Project
<img src="readmeAssets\logo.png">
Logo (TM)

# Term Brief
For this Term we were instructed to develop an app or site of our own choosing (i could be whatever we wanted) as long as its main features consist of using an ai api to work. We were allowed to use any code language and framework to develop the site. 
The site also had a to have a positive impact of these fields below.
The Site had to fall into certain categories such as :
- social
- Accessibilty 
- Enviroment
- Health Care 


## Table of contents

* [Technologies used](#technologies-used)
  * [Languages](#code-languages)
  * [Frameworks](#code-frameworks)
  * [AI Services Used](#ai-services-used)
* [setup](#setup)
  * [prerequisites](#prerequisites)
  * [node packages](#node-packages-to-install)
  * [method](#method)
* [feature & Functionaluty](#features--functionality)
  * [Authentication](#authentication)
  * [User Profile](#user-profile)
  * [Community](#community)
  * [Posting](#posting)
  * [Idea Generation](#idea-generation)
* [Branding](#branding)
* [Concept](#conceptulisation-process)
  * [MoodBoard](#moodboard)
  * [Color Pallete](#color-pallete)
  * [Wireframes](#wireframes)
    * [Home Page](#home-page)
    * [ER Diagram](#er-diagram)
    * [User Flow Diagram](#user-flow-diagram)
    * [Typography](#typography)
    * [Icon library used](#icon-library-used)
* [Development Process](#development-process)
* [Final Outcome](#final-outcome)
  * [Mockups](#mockups)
  * [Video Demonstration](#video-demonstration-️)
    * [Software Used](#software-used)
* [Auther](#author)
* [Contact](#contact-)
* [Acknowledgements](#acknowledgements)

## Technologies used
These are the technologies i have decided to use for my project

### Code languages 

<img src='readmeAssets\jsBanner.png'>

<img src='readmeAssets/HtmlBanner.png'>

<img src='readmeAssets\scssBanner.png'>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

### Code frameworks

**Frontend:**

React is the code frame work I have decided to use for the building of this web app

<img src='readmeAssets\reactBanner.png'>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)


**Backend:**

The database services used in this project are 

![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

Firebase is the backend services I am using for this project

### Ai services used 

![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
Google Cloud 

![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
Azure Open Ai 

# Setup

### Prerequisites
1. Visual studio code 
2. Firebase account
3. Google cloud account
4. Microsoft Azure account
4. Internet connection

#### Node packages to install
1. axios
```
npm install axios
```

2. react-router-dom
```
npm install react-router-dom
```

3. firebase
```
npm install firebase
```

4. Sass
```
npm install -g sass
```

5. Google Cloud Vision 
```
npm install @google-cloud/vision
```

### Method
#### Step 01:
create a new react app or just Clone the repo
```
npx create-react-app my-app
```

#### Step 02:
install all dependencies
[see list above](#node-packages-to-install)

#### Step 03:
Create a config folder in your src folder then inside the config folder create a firbase file firebase.js
```
src folder
  |__ config folder
              |__ firebase.js
```

inside this file pase your registered firebase apps config data 

```
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
```

#### Step 04: 
create a .env file and insert all your endpoint urls and api keys 

#### Step 05:
run your project with ```npm start```



# Features & Functionality 
All the feature and functions in the site.

## Authentication 
The user can sign up and create a new account or if they already have an account they can login with the login form. The site makes use of firebases Athentication services and When a user creats an account their info is also added to the data base as to later be fetched for the user profile page.

<img src='readmeAssets\featurenFunctionaltyScreenshots (1).png'>

## User Profile
This is the page where the user can view all their previouse posts and profile information.

<img src='readmeAssets\featurenFunctionaltyScreenshots (4).png'>

## Community 
The commuinty page allows everyone to view all the posts postd by the community as well as view each post and its data.

<img src='readmeAssets\featurenFunctionaltyScreenshots (2).png'>

## Posting
The User is able to post the artwork they have made from their generated idea to the community.

<img src='readmeAssets\postingfunction.png'>

## Idea Generation 
In the site the user can use the azure api to generate art ideas using the key words they have chosen on the tools panel.

<img src='readmeAssets\featurenFunctionaltyScreenshots (3).png'>


# Branding
<img src="readmeAssets\Frame 97.jpg" >

## Design Software Used

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

# Conceptulisation Process

## MoodBoard
<img src="readmeAssets\Moodboard.png">

## Color Pallete
<img src="readmeAssets\colorpallette.jpg">

## Wireframes

### Home Page
<img src='readmeAssets\home page.png'>

## ER Diagram
<img src='readmeAssets\ER Diagram.png'>

## User Flow Diagram
<img src="readmeAssets\user journey.png">

## Typography
<img src="readmeAssets\typography.png">

## Icon library used
<img src="readmeAssets\icons.jpg">

# Development Process 
the technical process of making the ideation site.

## Implementation Process

## Highlights 
The highlights of my experience making this project.

- using and implementing the Ai cloud Api components.
  - Azure Open AI.
  - Google Vision CLoud API.
- Designing the front end of the site.
- Creating the image upload system which analyses the image and then posts its data to the backend.
- Creating the community page with the masonry with the MUI library.
- Setting up the profile page and its content switches 
- Setting up the Prompt Constructor for the generation page

## Challenges
The challenges I experience in the development of this project

- Getting the `Ai` `API's` to work properly with the site and getting the right data from them was probaly the `biggest challange`.
- `Parsing` the text data from the `ai` `response` to be more readable for the user.
- Getting the individual post data from when a use `clicks` on a `post`. 

## User Testing Feedback🚶
This is all the feedback from the user testing.

### CS
- Very Cool UI, and likes the look and feel very much.
- would definitly use it and enjoyed using the site.
- To add the ability to post media from the profile page aswell. `(planned)`
- To keep the switch desing consistent.

### Dieter 
- Very nice UI
- very cool idea 
- to add the user's idea that they generated to the post when posting artwork `(planned)`
- to view the post information in the profile page too `(implemented)`
- to format the response from the idea generation to be more readable for the viewer 
- Loading display when generating an idea `(planned)`
- change Profile image and banner `(planned)`

## Bugs to Still Fix
These are the bugs that still persist in the site 🪲.

- the post image Form input feilds still submit the entry after each input.
- the masonry doesn't resize to the screen unless refreshed.

## future implementations
The Future Plans for The site.

### Deployments
- To One day deploy the site to the internet

### New Features
- To implement Full Profile Customizability (banner Image, Profile Image, Bio, )
- to attach the generated ideas to the posted art - either by posting media through the generated ideas.
- to generate ideas directly off of labels used from posted Ideas 
- To paginate the Community page

### Improvements 
- Improve post interaction and post to user data sharing.
- To improve the Data dsiplayed on a post 
- To improve the display of the user generated idea
- To imporve the Responsiveness of the site 
- improved authentication handeling in login and signup

# Final Outcome

## Mockups
<img src='readmeAssets\mockup (1).png'>
<img src='readmeAssets\mockup (2).png'>
<img src='readmeAssets\mockup (3).png'>

## Video Demonstration 📽️

### Software Used

![Adobe Premiere Pro](https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF.svg?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white)

[Demo_Video_Link](https://drive.google.com/drive/folders/1UpU56ajJPjw2dpUXimhDywUO3oyQB5Se?usp=sharing)


# Author
[Ungerer Hattingh](https://github.com/Ungerer221)

# Contact 📞
you can contact me at...

# Acknowledgements
- HugeIcons
- Pinterist 
- MarkDown badges https://github.com/Ileriayo/markdown-badges