// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth  = window.speechSynthesis;
  const select = document.querySelector('#voice-select');
  const button = document.querySelector('#explore button');

  synth.onvoiceschanged = (event) => {
    for (const voice of synth.getVoices()) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      select.appendChild(option);
    }
  }

  button.onclick = (event) => {
    
  }
}