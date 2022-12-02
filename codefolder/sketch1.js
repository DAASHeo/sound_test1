var wave;
var playing = false;

var button;
function setup() {
  createCanvas(640, 440);
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.freq(440); //440 4옥타브 라(가온 다) -> 기준점
  wave.amp(0); //volume

  button = createButton('play/pause');
  button.mousePressed(toggle);
}


// function draw() {
//   background(220);
// }

function toggle(){
  if(!playing){
    wave.start();
    wave.amp(0.5,1);
    playing=true;
  }
  else{
    wave.amp(0,1);
    playing = false;
  }
}
