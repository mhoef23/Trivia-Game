// Timer
// =============================

//  Variable that will hold our setInterval that runs the timer
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

var myTimeout;
// Our timer object
var timer = {

  time: 30,

  reset: function() {

    timer.time = 30;

    $("#time").html('<div class="card-subtitle mb-2 text-center my-text">' +
    '<span>Time Remaining: </span><span id="timer">30</span><span> Seconds</span>' +
    '</div>');
    timer.start();
    myTimeout = setTimeout(timer.timeUp, 1000 * 30);
  },
  start: function() {

    // Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
    }
  },
  stop: function() {

    // Use clearInterval to stop the count here and set the clock to not be running.
    clearTimeout(myTimeout);
    clearInterval(intervalId);
    clockRunning = false;
  },
  count: function() {

    // decrement time by 1.
    timer.time--;

    // show the converted time in the "timer" div.
    $("#timer").text(timer.time);
  },
  timeUp: function() {
    timer.stop();
    numberUnanswered++;
    $("#trivia").empty();
    $("#trivia").append('<div><b>Times Up!</b></div>');
    $("#trivia").append('<img src="assets/images/times-up.gif" alt="times-up" class="gif" >');
    timer.nextQuestionInterval();
  },
  nextQuestionInterval: function() {
    trivia.index++;
    timer.time = 10;

    $("#time").html('<div class="card-subtitle mb-2 text-center my-text">' +
    '<span>Time Until Next Question: </span><span id="timer">10</span><span> Seconds  </span><button id="skip">Next Question</button>' +
    '</div>');
    timer.start();
    myTimeout = setTimeout(displayQuestion, 1000 * 10);
  },
  skip: function() {
    timer.stop();
    displayQuestion();
  }
};