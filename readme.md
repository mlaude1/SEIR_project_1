# Project 1 Documentation
## by Matthew Laude

## Introduction

Explain what your project is here, what it does, etc.

## Technologies used:
- HTML
- CSS
- JS
- jQuery 

## Challenges

#### I have trouble with 

My code looked like this

```js
console.log('hello')
```

It was giving me a problem... when it was fixed it looked like this: 

```js
console.log('goodbye')
```

#### Example Table
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| thing1   | thing 2  | thing 3  |
| cheese 1 | cheese 2 | cheese 3 |


********
## Challenges and Solutions

- CHANGE TRIVIA TOPIC ✅ - I decided to change my original triva theme because ATLA was much more interesting to me

- Problem: background image would have white space when the browser window was smaller 
My solution was: 
```js
background-attachment: fixed;
```

- give the heading a blue glow ✅
```js
text-shadow: 0 0 15px #0096c7
```

- center the question container ✅
```js
margin: 10px auto;
```

- Replace the 'Player" labels with pai sho pieces ✅
```html
<img src="images/White_lotus_tile_icon.png" alt="white_lotus">
```

- answers styling:
    - cursor hover: change to click ✅
    - hover: highlight color (water, earth, fire, air) ✅
    - increase padding ➖
    - space out the letters ✅
    - adjust line-height ✅ -> added padding-top (slightly extra padding on longer lines, but it's ok)

- responsive design:
    - used @media (max-width: 615px) ✅
    - answers in a column? - I had to change width of #answer to 100% ✅

- added a glow effect => transition: box-shadow ✅

- iterate through the array (go through all 20 questions) ✅ (definitely needed help from Seb)

- added a rules button ✅
    - reference: https://www.youtube.com/watch?v=XH5OW46yO8I

- add a results screen displaying winner (alert?) ✅ ❌
    - problem: I used (q.length === 0) to end the game, but this ends the game prematurely with 1 question left. I didn't know how to make it last till the end

- highlight green on selected target, indicating if correct❌

- rules pop-up janky on smaller devices in landscape ❌ 

- edit markdown ❌

## Future additions
- add info buttons for all the 4 nations (lore)
- make questions a little harder: 
    1) add an Iroh question? ✅
    2) banana and onion juice ✅
    3) where is Zuko's scar? +alert
    4) blind bandit?
    5) Appa's giddiyap