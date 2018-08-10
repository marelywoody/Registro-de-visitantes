let name = document.getElementById('name');
let date = document.getElementById('date');
let woman = document.getElementById('mujer');
let man = document.getElementById('hombre');
let get = document.getElementById('get');

get.addEventListener('click', event => { 
  getName = name.value;
  getDate = date.value;
  databases.registro(getName,getDate);
});

var player = document.getElementById('player');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');

var handleSuccess = function (stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
};

captureButton.addEventListener('click', function () {
  var context = snapshot.getContext('2d');
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, snapshotCanvas.width,
    snapshotCanvas.height);
    player.style.display = 'none';
});

navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);