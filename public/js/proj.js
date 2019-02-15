//back button
function goBack() {
  window.history.back();
}

//login page
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
<script>
  function goBack() {
		window.history.back();
}

  function download(){
    var text = document.getElementById("exampleFormControlTextarea2").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "entries.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }


  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

//TIMER FOR ENTRY PAGE

//circle start
let progressBar = document.querySelector('.e-c-progress');
let indicator = document.getElementById('e-indicator');
let pointer = document.getElementById('e-pointer');
let length = Math.PI * 2 * 100;
progressBar.style.strokeDasharray = length;
function update(value, timePercent) {
	var offset = - length - length * value / (timePercent);
	progressBar.style.strokeDashoffset = offset;
	pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`;
};
//circle ends
const displayOutput = document.querySelector('.display-remain-time')
const pauseBtn = document.getElementById('pause');
const setterBtns = document.querySelectorAll('button[data-setter]');
let intervalTimer;
let timeLeft;
let wholeTime = 5 * 60;
let isPaused = false;
let isStarted = false;
update(wholeTime,wholeTime); //refreshes progress bar
displayTimeLeft(wholeTime);
function changeWholeTime(seconds){
  if ((wholeTime + seconds) > 0){
    wholeTime += seconds;
    update(wholeTime,wholeTime);
  }
}
for (var i = 0; i < setterBtns.length; i++) {
    setterBtns[i].addEventListener("click", function(event) {
        var param = this.dataset.setter;
        switch (param) {
            case 'minutes-plus':
                changeWholeTime(1 * 60);
                break;
            case 'minutes-minus':
                changeWholeTime(-1 * 60);
                break;
            case 'seconds-plus':
                changeWholeTime(1);
                break;
            case 'seconds-minus':
                changeWholeTime(-1);
                break;
        }
      displayTimeLeft(wholeTime);
    });
}
function timer (seconds){ //counts time, takes seconds
  let remainTime = Date.now() + (seconds * 1000);
  displayTimeLeft(seconds);

  intervalTimer = setInterval(function(){
    timeLeft = Math.round((remainTime - Date.now()) / 1000);
    if(timeLeft < 0){
      clearInterval(intervalTimer);
      isStarted = false;
      setterBtns.forEach(function(btn){
        btn.disabled = false;
        btn.style.opacity = 1;
      });
      displayTimeLeft(wholeTime);
      pauseBtn.classList.remove('pause');
      pauseBtn.classList.add('play');
      return ;
    }
    displayTimeLeft(timeLeft);
  }, 1000);
}
function pauseTimer(event){
  if(isStarted === false){
    timer(wholeTime);
    isStarted = true;
    this.classList.remove('play');
    this.classList.add('pause');

    setterBtns.forEach(function(btn){
      btn.disabled = true;
      btn.style.opacity = 0.5;
    });
  }else if(isPaused){
    this.classList.remove('play');
    this.classList.add('pause');
    timer(timeLeft);
    isPaused = isPaused ? false : true
  }else{
    this.classList.remove('pause');
    this.classList.add('play');
    clearInterval(intervalTimer);
    isPaused = isPaused ? false : true ;
  }
}
function displayTimeLeft (timeLeft){ //displays time on the input
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  displayOutput.textContent = displayString;
  update(timeLeft, wholeTime);
}
pauseBtn.addEventListener('click',pauseTimer);



    $(".play").click(function() {
      $(".stem").addClass("rain");

      setTimeout(function() {
        $('.stem').removeClass('rain');
      }, 1200);
    });

//END PLANT ANIMATION-->

    /* Function to display a Countdown timer with starting time from a form */
    // sets variables for minutes and seconds
    var ctmnts = 0;
    var ctsecs = 0;
    var startchr = 0; // used to control when to read data from form

    function countdownTimer() {

      // https://coursesweb.net/javascript/
      // if $startchr is 0, and form fields exists, gets data for minutes and seconds, and sets $startchr to 1
      if (startchr == 0 && document.getElementById('mns') && document.getElementById('scs')) {
        // makes sure the script uses integer numbers
        ctmnts = parseInt(document.getElementById('mns').value) + 0;
        ctsecs = parseInt(document.getElementById('scs').value) * 1;

        // if data not a number, sets the value to 0
        if (isNaN(ctmnts)) ctmnts = 0;
        if (isNaN(ctsecs)) ctsecs = 0;

        // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
        document.getElementById('mns').value = ctmnts;
        document.getElementById('scs').value = ctsecs;
        startchr = 1;
        document.getElementById('btnct').setAttribute('disabled', 'disabled'); // disable the button
      }

      var text = document.getElementById("exampleFormControlTextarea2").value;
      text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
      var blob = new Blob([text], {
        type: "text/plain"
      });
      var anchor = document.createElement("a");
      anchor.download = "entries.txt";
      anchor.href = window.URL.createObjectURL(blob);
      anchor.target = "_blank";
      anchor.style.display = "none"; // just to be safe!
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }

    // When the user clicks on <div>, open the popup
    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }


    // When the user clicks on <div>, open the popup
    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }
