<img src="readmeAssets\Term4ProjectBanner.png">

[![npm version](https://img.shields.io/npm/v/@google-cloud/vision.svg)](https://www.npmjs.org/package/@google-cloud/vision)
![Static Badge](https://img.shields.io/badge/javascript?style=flat&label=language&color=%23FFE45B&link=https%3A%2F%2Fwww.javascript.com%2F)

# Ideation-Term4-Project

<img src="readmeAssets\logo.png">
Logo (TM)
<h1> IDEATION </h1>

<h3 align="center"> By Ungerer Hattingh </h3>

<p align="center">
  Ideation is a generation app powered by Ai
</p>

## Table of contents

* [Technologies used](#technologies-used)
  * [Languages](#code-languages)
  * [Frameworks](#code-frameworks)
  * [AI Services Used](#ai-services-used)
* [setup](#setup)
  * [prerequisites](#prerequisites)
  * [node packages](#node-packages-to-install)
  * [method](#method)

## Technologies used
These are the technologies i have decided to use for my project

### Code languages 

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

### Code frameworks

**Frontend:**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

React is the code frame work i have decided to use for the building of this web app

**Backend:**

![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

Firebase is the backend services i am using for this project

### Ai services used 

Google Cloud 
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)

Azure Open Ai 
![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)

# Setup

### prerequisites
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

## Design Software Used

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

# Branding
<img src="readmeAssets\Frame 97.jpg" >

# Conceptulisation Process

## MoodBoard
<img src="readmeAssets\Moodboard.png">

## Color Pallete
<img src="readmeAssets\colorpallette.jpg">

## Wireframes

## ER Diagram

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
- to attach the generated ideas to the posted art
- to generate ideas directly off of labels used from posted Ideas 

### Improvements 
- Improve post interaction and post to user data sharing.
- To improve the Data dsiplayed on a post 
- To improve the display of the user generated idea
- To imporve the Responsiveness of the site 
- improved authentication handeling in login and signup

# Final Outcome

## Mockups

## Video Demonstration

# Author
![Ungerer Hattingh](https://github.com/Ungerer221)

# Contact
you can contact me at...

# Acknowledgements