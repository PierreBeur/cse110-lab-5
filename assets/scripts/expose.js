// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.querySelector('#horn-select');
  const img        = document.querySelector('img');
  const audio      = document.querySelector('audio');
  const volume     = document.querySelector('#volume');
  const icon       = document.querySelector('#volume-controls img')

  hornSelect.onchange = (event) => {
    const value = event.target.value;
    img.src = `assets/images/${value}.svg`;
    audio.src = `assets/audio/${value}.mp3`;
  };

  volume.oninput = (event) => {
    const value = event.target.value;
    audio.volume = value / 100.0;

    var level;
         if (value == 0) { level = 0; }
    else if (value < 33) { level = 1; }
    else if (value < 67) { level = 2; }
    else                 { level = 3; }

    icon.src = `assets/icons/volume-level-${level}.svg`;
    icon.alt = `Volume level ${level}`;
  };

  
}