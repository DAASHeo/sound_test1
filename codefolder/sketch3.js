//가속도로 음 바꾸기
var wave;
var playing = false;

var button;
var slider;

var ampValue = 0;

function setup() {
  createCanvas(720, 256);
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.freq(440); //440 4옥타브 라(가온 다) -> 기준점
  wave.amp(0); //volume

  button = createButton('play/pause');
  button.mousePressed(toggle);
}


function draw() {
  wave.freq(ampValue);
}

function toggle(){
  if(!playing){
    wave.start();
    wave.amp(0.3,1);
    playing=true;
  }
  else{
    wave.amp(0,1);
    playing = false;
  }
}

function deviceMoved(){
  ampValue = accelerationX * 1000;
  background(255, 255, 255);
  text(accelerationX*2, 10, 10);
}
