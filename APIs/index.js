const fileSelector = document.querySelector("input[type=file]");
const video = document.querySelector("video");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const volUp = document.getElementById("vol_up");
const volDown = document.getElementById("vol_down");
const loadingMessage = document.getElementById('loading_message');
const videoPlayer = document.getElementById('video-player');

function isFileApiSupported() {
  return 'File' in window && 'FileReader' in window && 'Blob' in window;
}

function isValidVideoFile(file) {
  const acceptedMimeTypes = [
    'video/mp4',
    'video/webm',
    'video/ogg',
  ];

  return acceptedMimeTypes.includes(file.type);
}

if (!isFileApiSupported()) {
  alert("We're sorry, your browser is not compatible with API File. Please, update to a more modern browser");
} else {
  fileSelector.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file && isValidVideoFile(file)) {
      loadingMessage.style.display = 'block';
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        const blob = new Blob([event.target.result], { type: file.type });
        const url = URL.createObjectURL(blob);
        video.src = url;
        alert('Your file has been successfully updated.');
        fileSelector.nextElementSibling.innerHTML = '';
      };

      fileReader.readAsArrayBuffer(file);

    } else {
      alert('Please select a file with a valid video format.');
      fileSelector.value = '';
    }
  });

  play.addEventListener('click', () => {
    video.play();
  });

  pause.addEventListener('click', () => {
    video.pause();
  });

  volUp.addEventListener('click', () => {
    if (video.volume < 1) {
      video.volume += 0.1;
    }
  });

  volDown.addEventListener('click', () => {
    if (video.volume > 0) {
      video.volume -= 0.1;
    }
  });

  video.addEventListener('loadeddata', () => {
    loadingMessage.style.display = 'none';
    videoPlayer.style.display = 'block';
  });
}
