// https://www.august.com.au/blog/svg-animation-with-greensock/
window.onload=function(){



const tl = new TimelineMax({onComplete:done, paused:true});
const elem = document.getElementById('ellipse-53');
const pauseBtn = document.getElementById('btn1');
const playBtn = document.getElementById('btn2');

const restartBtn = document.getElementById('btn4');

//elem.style.opacity = 0; moved to Set
let duration = 1;
var currentTimeScale = tl.timeScale(.1); //gets current timeScale
let paused = tl.paused();



pauseBtn.addEventListener('click', function(e) {

   tl.pause();

});

playBtn.addEventListener('click', function(e) {
  tl.resume();
});

restartBtn.addEventListener('click', function(e) {
  tl.restart();
});

function done(){
    console.log("duration is: "+t1.duration() + "seconds!");
}



function myFunction() {
  var x = document.getElementById("fin");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.innerhtml="Good Job! You reflected for " + t1.duration() + "seconds!";
  } else {
    x.style.display = "none";
  }
}




/* letter "g" animation
tl.set(elem, {
  opacity: 0
})
.to(elem, duration, {
  x: 1000,
  opacity: 1,
  scale: 2,
  ease: Elastic.easeOut.config(1, 0.3)
});

tl.to(elem, duration, {
  y: 100,
  scale: 8,
}, "-=1");
*/


/* flower animation */
const icnBg = document.getElementById('icnBg');
const petales_grp1 = document.querySelectorAll('.cls-8');
const petales_grp2 = document.querySelectorAll('.cls-9');
const petales_center = document.querySelector('.cls-10');

const plante_tige = document.querySelector('.cls-7');
const plante_leafRight = document.getElementById('group-7-2');
const plante_leafLeft = document.getElementById('group-7');

var flower = [petales_grp1, petales_grp2, petales_center];
var plante = [plante_tige, plante_leafRight, plante_leafLeft];


tl.set(petales_grp1, {
  scale: 0,
  transformOrign:'0% 0%',
  //rotation: 0
})

tl.set(petales_grp2, {
  scale: 0,
})

tl.set(petales_center, {
  scale: 0,
  transformOrign:'0% 0%'
})

tl.set(plante_tige, {
  scale: 0
})

tl.set(plante_leafRight, {
  scale: 0
})

tl.set(plante_leafLeft, {
  scale: 0
})


tl.staggerTo(plante, 0.8, {
  scale: 1
}, 0.5,

  //onComplete:tweenComplete,
  //onCompleteParams:["{self}"]},
  //1.2, myCompleteAll

);

tl.staggerTo(flower, 0.8, {
  scale: 1
}, 0.5
  //onComplete:tweenComplete,
  //onCompleteParams:["{self}"]},
  //1.2, myCompleteAll
);
}
