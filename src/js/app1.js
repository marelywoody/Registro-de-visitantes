
var player = document.getElementById('player');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');
var sonrie = document.getElementById('sonrie');
let win = document.getElementById('win');
let span = document.getElementsByClassName('close')[0];
let info = document.getElementById('info-user');

var handleSuccess = function(stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
};
snapshotCanvas.style.display = 'none';

captureButton.addEventListener('click', function() {
  var context = snapshot.getContext('2d');
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, snapshotCanvas.width,
    snapshotCanvas.height);
  player.style.display = 'none';
  captureButton.style.display = 'none';
  sonrie.style.display = 'none';
  infoFunction();
  win.style.display = 'block';
});

navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);

span.onclick = function() {
  win.style.display = 'none';
};
window.onclick = function(event) {
  if (event.target == win) {
    win.style.display = 'none';
  }
};

infoFunction = () => {
  info.innerHTML = `<h2>Tu registro ha sido exitoso</h2>
  <p>Se le ha notificado a la persona de tu visita</p>
  <button class = "btn-styles" id= "btnFinal"></button>`;
  var btnNext = document.getElementById('btnFinal');
  btnNext.addEventListener('click', function() {
    window.location.assign('../index.html');
  });

};