let playing = false;
let movie;

// CONSTS
const videoFile = "assets/img/4x-resolve-music-sq.mp4";
const frameKeyword = "frame";

function setup() {
  movie = createVideo([videoFile]);

  if (isStaticFrame()){

  	secondsF = movie.duration();
  	console.log(secondsF);
  	if (secondsF > 0) {
      let randomTime = random(floor(secondsF));
      movie.time(randomTime);
    }

  } else {
  	console.log("VIDEO");
  	movie.play().loop().time(0);
  }

}

function isStaticFrame(){
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(frameKeyword) === "";
}