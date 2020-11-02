let playing = false;
let movie;
let button;

// CONSTS
const videoFile = "assets/img/4x-resolve-music-sq.mp4";
const frameKeyword = "frame";

function setup() {
  movie = createVideo([videoFile], vidLoad);
}

function vidLoad() {
  movie.size(AUTO, windowHeight).center("horizontal");
  if (!isStaticFrame()){
    button = createButton('play')
      .addClass('p5button')
      .position(0, 0);
    button.mousePressed(toggleVid); // attach button listener
    button.center("horizontal");
  } else {

    // STATIC FRAME
    secondsF = movie.duration();
    console.log(secondsF);
    if (secondsF > 0) {
      let randomTime = random(floor(secondsF));
      movie.time(randomTime);
    }
  }
}

// plays or pauses the video depending on current state
function toggleVid() {

  if (playing) {
    movie.pause();
    button.html('play');
  } else {
    movie.loop();
    button.html('pause');
  }
  playing = !playing;
}


function isStaticFrame(){
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(frameKeyword) === "";
}

function windowResized() {
  movie.size(AUTO, windowHeight).center("horizontal");
  button.center("horizontal");
}