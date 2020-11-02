let playing = false;
let fingers;
let button;

let videoFile = "assets/img/volume-lerp-test.mp4";

function setup() {
  // specify multiple formats for different browsers
  fingers = createVideo(["assets/img/volume-lerp-test.mp4", videoFile]);
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}
