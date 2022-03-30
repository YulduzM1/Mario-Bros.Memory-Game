# Pre-work - *Mario Bros.Memory Game*

**Mario Bros. Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Yulduz Muradova**

Time spent: **17.5** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] When the user loses or wins, the user receives corresponding Mario Bros. Sound (audio files were added) 
- [x] When the user guessess incorrectly, on heart will dissapear.
- [x] The User can see  which round is currently being played
- [x] The background image is responsive with any webpage and mobile screens
- [x] The user receives feedback after losing the game with info on how many round the user reached. 


## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
### a) When the User Loses

[Link Here](https://imgur.com/EmOdLd3.gif)

### b) When the User Wins 
(For testing purposes, the number of rounds was set to 4)

[Link Here](https://imgur.com/RZXJ7ZK.gif)

### c) Game Timer
(User has only 10 seconds for each round. When timer will reach to 0 seconds, the user loses the game)

[Link Here](https://imgur.com/m9c8pZF.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[For my project, I used outside resources such as www.w3schools.com and www.geeksforgeeks.org. I also used stack overflow for finding the best solution to help me with making my background to be responsive in other devices]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[One of the most challenging parts of  this project was to create a timer. I was not very familiar with async functions before. Therefore, I had to learn more about these functions and how I could use them to set the timer. It was quite challenging to understand where to add the functions and on which part to stop the timer. However, learning from examples provided by w3schools.com and geeksforgeek.org, I could solve the issue. As a result, I achieved my goal of stopping the timer when the user guesses correct or incorrect, when the user loses the game, and when the new pattern starts/stops playing. Now I can successfully use async functions in my other projects in the future.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[After completing my submission, I am looking into possible ways of optimizing my project. I learned more about the async functions and explored more efficient ways of setting the time for each round (lines 12-22). Additionally, in my project, when the user loses all the 3 chances(hearts), the page gets refreshed. I was wondering if there would be any alternative ways of bringing back all elements instead of refreshing the page and if it is a good web-development practice to implement in my future projects.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[In the future, I plan to add new features to the game, so users will be able to choose different game modes such as “easy”, “medium”, “hard”. Depending on what mode the user selects, the game difficulty and the timer between each round would also change. Besides this, If I had more time to work on the project, I would create a configurable setting that the user can adjust. It will allow the user to input how many rounds they want to play, level of difficulty, timer for each round, and select different Mario theme background images. Third, I would spend more time refactoring my functions to make them easier to maintain in the future. In addition to that, I would make my web page more responsive and mobile-friendly. I worked on my background to be responsive and as well as mobile-friendly. However, I would work on my buttons and other elements of the page to be responsive across all devices. After I submit my project, I will look more into these topics, and I hope to gain more practice during the program from my mentors and fellow teammates]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/z24_tPAs0cQ)


## License

    Copyright [YULDUZ MURADOVA]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
