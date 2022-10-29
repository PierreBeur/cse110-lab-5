// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth  = window.speechSynthesis;
  const img    = document.querySelector('#explore img');
  const text   = document.querySelector('#text-to-speak');
  const select = document.querySelector('#voice-select');
  const button = document.querySelector('#explore button');
  let voices;

  synth.onvoiceschanged = () => {
    voices = synth.getVoices();
    for (const voice of voices) {
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

  button.onclick = () => {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    utterThis.voice = voices[select.selectedIndex - 1];
    utterThis.onstart = () => {
      img.src = `assets/images/smiling-open.png`;
      img.alt = `Smiling open face`;
    }
    utterThis.onend = () => {
      img.src = `assets/images/smiling.png`;
      img.alt = `Smiling face`;
    }
    synth.speak(utterThis);
  }

}