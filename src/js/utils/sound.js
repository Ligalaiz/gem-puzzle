
export default function sound() {
  let keyAudio = document.getElementById('audioClick');
  keyAudio.currentTime = 0;
  keyAudio.play();
}

