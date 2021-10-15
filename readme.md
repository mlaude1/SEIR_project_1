# Project 1 Documentation
## by Matthew Laude

## Introduction

My project is an Avatar: The Last Airbender themed trivia game where 2 players take turns answering questions. Answering a question correctly earns you 1 point. Getting a question wrong earns you 0 points. There are a total of 20 questions. The player with the most points wins. 

## Technologies used:
- HTML
- CSS
- JS
- jQuery 

#### Example Table
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| thing1   | thing 2  | thing 3  |
| cheese 1 | cheese 2 | cheese 3 |


********

## Challenges and Solutions

- CHANGE TRIVIA TOPIC - I decided to change my original triva theme because ATLA was much more interesting to me

- Problem: background image would have white space when the browser window was smaller 
My solution was: 
```js
background-attachment: fixed;
```

- give the heading a blue glow 
```js
text-shadow: 0 0 15px #0096c7
```

- center the question container 
```js
margin: 10px auto;
```

- Replace the 'Player" labels with pai sho pieces 
```html
    - get images from online
    - move them into project folder
<img src="images/White_lotus_tile_icon.png" alt="white_lotus">
```

- answers styling:
    - cursor hover: change to click 
    ```js
    cursor: pointer;
    ```
    - hover: highlight color (water, earth, fire, air) 
    ```js
    #a {
        border: 6px #0077b6 double;
    }
    #a:hover {
        box-shadow: 0 0 20px #0096c7;
    ```
    - increase padding ➖
    - space out the letters 
    - adjust line-height -> added padding-top (slightly extra padding on longer lines, but it's ok)

- responsive design:
```js
@media (max-width: 640px) {
```
- answers were forced into a column. To keep them in a 4x4 I used:
```js
#answer {
    width: 100%;
```

- to stop getting repeat question (definitely needed help. Thanks Seb):
```js
const randomQuestion = q.splice(randomIndex, 1)[0]
```

- added a rules button 
    - reference: https://www.youtube.com/watch?v=XH5OW46yO8I

## Unsolved issues
- add a results screen displaying winner (alert?) ✅ ❌
    - problem: I used (q.length === 0) to end the game, but this ends the game prematurely with 1 question left. I didn't know how to make it last till the end

- highlight green on selected target, indicating if correct❌

- rules pop-up is janky on smaller devices in landscape ❌ 

## Future additions
- add info buttons for all the 4 nations (lore)
- make questions a little harder: 
    1) add an Iroh question? ✅
    2) banana and onion juice ✅
    3) where is Zuko's scar? +alert
    4) blind bandit?
    5) Appa's giddiyap