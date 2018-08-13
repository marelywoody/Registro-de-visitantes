
const player = document.getElementById('player');
const snapshotCanvas = document.getElementById('snapshot');
const captureButton = document.getElementById('capture');
const sonrie = document.getElementById('sonrie');
const win = document.getElementById('win');
const span = document.getElementsByClassName('close')[0];
const info = document.getElementById('info-user');

const handleSuccess = (stream) => {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
};
snapshotCanvas.style.display = 'none';

captureButton.addEventListener('click', event => {
  let context = snapshot.getContext('2d');
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
  player.style.display = 'none';
  captureButton.style.display = 'none';
  sonrie.style.display = 'none';
  infoFunction();
  win.style.display = 'block';
});

navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);

span.onclick = event =>  {
  win.style.display = 'none';
};
window.onclick = (event) => {
  if (event.target == win) {
    win.style.display = 'none';
  }
};

infoFunction = () => {
  info.innerHTML = `<h2>Tu registro ha sido exitoso</h2>
  <p>Se le ha notificado a la persona de tu visita</p>
  <button class = "btn-styles" id= "btnFinal"></button>`;
  let btnNext = document.getElementById('btnFinal');
  btnNext.addEventListener('click', event => {
    window.location.assign('../index.html');
  });

};