# Pre-work - _Five doges of the apocalypse_

**Five doges of the apocalypse** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Hien To**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/whimsical-fancy-structure

## Required Functionality

The following **required** functionality is complete:

- [1] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [1] "Start" button toggles between "Start" and "Stop" when clicked.
- [1] Game buttons each light up and play a sound when clicked.
- [1] Computer plays back sequence of clues including sound and visual cue for each button
- [1] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [1] User wins the game after guessing a complete pattern
- [1] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [1] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [1] Buttons use a pitch (frequency) other than the ones in the tutorial
- [1] More than 4 functional game buttons
- [1] Playback speeds up on each turn
- [1] Computer picks a different pattern each time the game is played
- [1] Player only loses after 3 mistakes (instead of on the first mistake)
- [1] Game button appearance change goes beyond color (e.g. add an image)
- [0] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [1] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [1] There is a hidden gif indicating victory or defeat after the game ends
- [1] The number of mistakes (max 3) and the amount of time (max 30 secs) is on display
- [1] Changing background color

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Winning state:
![win](https://i.imgur.com/A6WbByd.gif)
![w](win.gif)
<img src="https://cdn.glitch.com/4ae94571-8cd8-489f-85f9-6c466bfc5720%2Fwin.gif?v=1616542096209">

Losing by 3 mistakes:
<img src="https://cdn.glitch.com/4ae94571-8cd8-489f-85f9-6c466bfc5720%2Fmistake.gif?v=1616542101824">

Losing by timeout:
<img src="https://cdn.glitch.com/4ae94571-8cd8-489f-85f9-6c466bfc5720%2Ftimeout.gif?v=1616542108646">

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   https://www.w3schools.com/howto/howto_css_image_center.asp
   https://www.w3schools.com/css/css_font.asp
   https://www.w3schools.com/html/html_images.asp
   https://www.color-hex.com/
   https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
   https://stackoverflow.com/questions/45657133/javascript-hit-counter
   https://stackoverflow.com/questions/22385368/jquery-countdown-timer-with-milliseconds
   https://www.the-art-of-web.com/javascript/creating-sounds/
   https://codepen.io/herrberk/pen/GqrMvo
   

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   It is easier to write on a blank slate than a packed written board. So, a challenge that I encountered in creating this submission is debugging 
   undetected syntax errors in the JavaScript file, which occurred due to my habit with formatings in other programming languages. A specific mistake 
   that took me a long time to figure out and fix is calling the default function “length” from the pattern array in the “guess” function. Initially, 
   I used the “size()” method since I am most familiar with C++, and since it is a programming habit, I did not lay a second thought on it. Consequently, 
   the program only runs the first playClueSequence(), and then it never proceeds. After going through the write up once again and confirming that my 
   other functions work correctly, which left only the logic part of the “guess” function unchecked, I began debugging this part. Then, after a few minutes, 
   I recalled that in Java, which is another language that I am familiar with, uses the “length()” method for string size and “length” variable for arrays, 
   which means that using “size()” might be the problem even though the compiler did not catch it. Finally, I replace “pattern.size()” with “pattern.length”, 
   and the code works as defined. Despite the fact that this is a simple mistake, it is caused by unconscious habits, which could be harder to detect when 
   compared to major errors. So, with this fallacy in mind, I keep reminding myself that I do not have much experience in this new language, and I have to 
   be careful with old habits which could turn out problematic.

3) What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   After completing my submission, I observed that compared to other websites, the website that I just made is very simple and primitive. Then, given that 
   there are only so much about CSS style, I wonder how do they think of a way to design such complicated features and beautiful designs? Is it that they 
   manually do the work? Or is there an external program / programming language that helps them in doing so? Another question that intrigues me is how would 
   security be enabled for the websites. I believe that it is relatively easy to view the elements of the page, and essentially “hack” the game by manipulating 
   the codes, then what is a way to protect such information and prevent people from cheating? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   If I have a few more hours to work on this project, I would first spend time padding the potential bugs that could arise from the primitiveness of the game. 
   One example is that I would make the buttons unclickable during the course of the clues being played, else the player could click along as the clues are being 
   played, which makes the game buggy and also much easier. Another thing is that I would learn to enable not only mouse click actions, but also touch screen actions. 
   Since my laptop is a touch-screen, but the “onmousedown” and “onmouseup” methods do not recognize this. Then, I can still win the game due to the “onclick” action, 
   but I cannot hear the tones or see the hidden images. Knowing this, adding keyboard keys to simulate a piano instead of just clicking is also another feature that 
   I want to add. And finally, I would work more on the design of the webpage, in order to make it look more likable, and also spice up the game by adding some hidden 
   animations (raining, snowing, etc.) when a specific pattern is played, and user-manipulated challeges (take user input to lower time limit, clue playing speed, etc.). 

## License

    Copyright [Hien To]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
