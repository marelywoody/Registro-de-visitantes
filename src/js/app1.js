
var player = document.getElementById('player');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');
var siguiente2 = document.getElementById('siguiente2');
siguiente2.style.display = 'none';

var handleSuccess = function(stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
};

captureButton.addEventListener('click', function() {
  var context = snapshot.getContext('2d');
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, snapshotCanvas.width,
    snapshotCanvas.height);
  player.style.display = 'none';
  captureButton.style.display = 'none';
    siguiente2.style.display = 'block';
});

siguiente2.addEventListener('click', function (){

  window.location.assign('view2.html');

});


navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);