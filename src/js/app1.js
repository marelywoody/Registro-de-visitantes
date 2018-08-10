
var player = document.getElementById('player');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');
let ok = document.getElementById('ok');
let ocultar = document.getElementById('ocultar'); 
ocultar.style.display = 'none'

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
    captureButton.style.display = 'none';
    ocultar.style.display = 'block';
});

ok.addEventListener('click', event => {
  window.location.assign('../index.html');
});

navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);