//Yulduz Muradova

// global constants
const clueHoldTime = 250; //how long to hold each clue's light/sound

//Global Variables
var cluePauseTime = 800; //how long to pause in between clues
var nextClueWaitTime = 750; //how long to wait before starting playback of the clue sequence
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0

//Sounds for Start, Lose and Win. 
var snd = new Audio("https://cdn.glitch.global/f770d1b2-692c-4242-8f40-6b0f3115fbb8/sm3dl_luigi_here_we_go.wav?v=1646889826588");
var loseSound = new Audio("https://cdn.glitch.global/f770d1b2-692c-4242-8f40-6b0f3115fbb8/sma4_death-luigi.wav?v=1646889979375");
var winSound = new Audio("https://cdn.glitch.global/f770d1b2-692c-4242-8f40-6b0f3115fbb8/mk64_firstplace.wav?v=1646890384324");

//hearts
var heart1 = document.getElementById("heart1");
var heart2 = document.getElementById("heart2");
var heart3 = document.getElementById("heart3");

//how many rounds
var gameLength = 9;


//random number generator
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}


function startGame(){
  //adds to pattern array new random number
  for (var i=0; i<gameLength; i++) {
    snd.play();
    snd.currentTime=0;
    pattern.push(generateRandomInteger(6));
  }
  
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();

  // Initialize user timer
  startTimer();
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    location.reload();
}


// Sound Synthesis Functions (Can be replaced with Audio Files)
const freqMap = {
  1: 182.5,
  2: 259.6,
  3: 323,
  4: 416.2,
  5: 550.2,
  6: 699
}


function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  context.resume();
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume();
    tonePlaying = true;
    
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

///////////////////  TIMER  //////////////////////
var counterInitialValue = 10; // Length of timer & resets
var counter = counterInitialValue;                                                           
var timerStatus = "stopped";                                               
                                                                           
function startTimer() {                                                  
  // Set initial timer duration                                           
  resetTimer();
                                                                           
  // Update timer's status to running                                     
  timerStatus = "running";
  updateTimerState();
                                                                           
  // Start async timer decrease                                    
  setInterval(decreaseTimer, 1000)              
}                                                                      
                                          
function decreaseTimer() {                                            
  if (timerStatus != "paused") {                                
    // Decrease Timer                                 
    counter--;
    
    if (counter > 0){
      // User has time left
      updateTimerState();
    } else {
      // User ran out of time, end the game
      loseGame();
      pauseTimer();
      resetTimer();
      updateTimerState();
    }
  }
}

function pauseTimer() {
  timerStatus = "paused";
}

function playTimer() {
  timerStatus = "running"
}

function resetTimer() {
  counter = counterInitialValue;
  updateTimerState();
}

function updateTimerState() {
  var id = document.getElementById("count");
  id.innerHTML = counter;  
}
////////////////////////////////////////////////////


function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  setTimeout(playTimer, delay);
}

function loseGame(){
  stopGame();
  loseSound.play();
  alert("G A M E  O V E R!. You reached to round "+(+progress+ +1) +"! Thank you!");
  loseSound.currentTime=0;

}

function winGame(){
  stopGame();
  winSound.play();
  winSound.currentTime=0;
  alert("Game Over. You win!");
}

var userLife = 3;

function guess(btn){
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    console.log("Guess correct!");
    //Guess was correct!
    if(guessCounter == progress){
      console.log("resetting timer");
      pauseTimer();
      resetTimer();
      console.log("timer reset");
      
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        document.getElementById("rounds").innerHTML =  ("Round: " + (+progress+ +1)).bold();
        playClueSequence();
        cluePauseTime = cluePauseTime - 100;
       
      }
    }else{
      //so far so good... check the next guessxßΩ∂
      guessCounter++;
    }
  }else{
    // Guess was incorrect!
    userLife = userLife - 1;
    if (userLife==0){
      heart1.remove();
      loseGame();
    }
    else{
      alert("You have only " + userLife + " lives left!");
    if(userLife == 2){
      heart3.remove();
    } else if(userLife == 1){
      heart2.remove();
    }
      pauseTimer();
      resetTimer();
      playClueSequence();
    }
  }
}


/*OtherSounds
var b1Sound = new Audio("https://cdn.glitch.global/f770d1b2-692c-4242-8f40-6b0f3115fbb8/1.pipe.wav?v=1647159054050");
var b2Sound = new Audio("https://cdn.glitch.global/f770d1b2-692c-4242-8f40-6b0f3115fbb8/2.jump.wav?v=1647156502350");
var b3Sound = new Audio("https://cdn.glitch.global/f770d1b2-692c-4242-8f40-6b0f3115fbb8/3.flower.wav?v=1647159421529");
var b4Sound = new Audio("https://cdn.glitch.global/f770d1b2-692c-4242-8f40-6b0f3115fbb8/4.Coin.wav?v=1647156502351");
var b5Sound = new Audio("https://cdn.glitch.global/f770d1b2-692c-4242-8f40-6b0f3115fbb8/5.enemy.wav?v=1647159109952");
var b6Sound = new Audio("https://cdn.glitch.global/f770d1b2-692c-4242-8f40-6b0f3115fbb8/6.fireball.wav?v=1647156502351");
*/

/* To change Sounds to Mario Bros Sounds, use the following code and comment the playTone(), startTone() functions. 
Change the id "startTone" in index.html to "Sound123(bttn)"
function Sound123(bttn){
    if(bttn ==1){
    b1Sound.play();
    b2Sound.currentTime=0;
  }else if(bttn ==2){
    b2Sound.play();
    b2Sound.currentTime=0;
  }else if(bttn ==3){
    b3Sound.play();
    b3Sound.currentTime=0;
  }else if(bttn ==4){
    b4Sound.play();
    b4Sound.currentTime=0;
  }else if(bttn ==5){
    b5Sound.play();
    b5Sound.currentTime=0;
  }else if(bttn ==6){
    b6Sound.play();
    b6Sound.currentTime=0;
  }
*/


