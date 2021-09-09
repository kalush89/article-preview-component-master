# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./images/screenshot.jpg)


### Links

- Solution URL: [https://github.com/kalush89/article-preview-component-master](https://github.com/kalush89/article-preview-component-master)
- Live Site URL: [http://article-preview-component-master-smoky.vercel.app/](http://article-preview-component-master-smoky.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Learnt how to create a speech bubble with css.
```css
div#sm-nav {
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 20em;
        height: 4em;
        right: -5.4em;
        margin-top: 10.5em;
        padding: 0 3.2em;
        background-color: hsl(217, 19%, 35%);
        border-radius: 10px 10px 10px 10px;
        opacity: 0; 
    }

    div#sm-nav:before {
        content: "";
        position: absolute;
        right: 8.7em;
        top: 4em;
        width: 0;
        height: 0;
        border-top: 13px solid hsl(217, 19%, 35%);
        border-right: 13px solid transparent;
        border-left: 13px solid transparent;
        
        
    }
```
Successfully manupulated an svg image color. Converted from dark grey to white
```css
button#share.is-dark img{
    filter: invert(0.5) sepia(0) saturate(1) hue-rotate(0deg) brightness(5);
}

```

### Useful resources

- [Coding is love](https://codingislove.com/css-speech-bubbles/) - This helped me create the speech bubble. I will revisit this site later to master the process.


## Author

- Frontend Mentor - [@kalush89](https://www.frontendmentor.io/profile/kalush89)

