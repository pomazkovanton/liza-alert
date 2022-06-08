const video = document.querySelector('.video__mediaplayer');

// Кнопки
const playBtn = document.querySelector('.video__btn_type_play');
const muteBtn = document.querySelector('.video__btn_type_sound');
const fullscreenBtn = document.querySelector('.video__btn_type_fullscreen');

// Иконки
const iconPlay = document.querySelector('.video__icon_type_play');
const iconPause = document.querySelector('.video__icon_type_pause');
const iconVolume = document.querySelector('.video__icon_type_sound');
const iconMute = document.querySelector('.video__icon_type_sound-off');

// Прогресс бары
const progressBar = document.querySelector('.video__slider_type_timeline');
const volumeBar = document.querySelector('.video__slider_type_sound');

let volumeBarProgres = 0;

// Переключение иконок
const toggleIcon = (...icons) => {
  icons.map((icon) => icon.classList.toggle('video__icon_show'));
};

// Запуск / остановка видео
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  toggleIcon(iconPlay, iconPause);
};

// Функционал прогресс бара
const updateProgress = () => {
  progressBar.value = (video.currentTime / video.duration) * 100;
};

const setProgress = () => {
  video.currentTime = `${(progressBar.value * video.duration) / 100}`;
};

// Звук видео
const setVolume = () => {
  video.volume = volumeBar.value / 100;
  volumeBar.style.backgroundSize = `${volumeBar.value}%`;
  if (video.volume === 0) {
    toggleIcon(iconVolume, iconMute);
  } else {
    iconVolume.classList.add('video__icon_show');
    iconMute.classList.remove('video__icon_show');
  }
};

const muteVolume = () => {
  if (video.volume === 0) {
    video.volume = volumeBarProgres / 100;
    volumeBar.value = volumeBarProgres;
    volumeBar.style.backgroundSize = `${volumeBarProgres}%`;
  } else {
    video.volume = 0;
    volumeBarProgres = volumeBar.value;
    volumeBar.value = 0;
    volumeBar.style.backgroundSize = `${0}%`;
  }
  toggleIcon(iconVolume, iconMute);
};

// Fullscreen видео
const toggleFullscreen = () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
};

const updateVideo = () => {
  video.currentTime = 0;
};

setVolume();
updateProgress();

playBtn.addEventListener('click', toggleVideoStatus);
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('change', setProgress);
volumeBar.addEventListener('input', setVolume);
muteBtn.addEventListener('click', muteVolume);
fullscreenBtn.addEventListener('click', toggleFullscreen);
video.addEventListener('ended', updateVideo);
