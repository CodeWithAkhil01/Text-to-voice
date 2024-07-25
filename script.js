let voicee = new SpeechSynthesisUtterance(); // object to handle text-to-speech requests.

let voices = [];
let voiceSelect = document.querySelector("select");

// for diff voices options
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices(); 
  voicee.voice = voices[10]; // getVoices() retrieve or get all available voices and stores them in the voices array.
  

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};


voiceSelect.addEventListener("change", () => {
  voicee.voice = voices[voiceSelect.value];
});

// selecting button
document.querySelector("button").addEventListener("click", () => {
  voicee.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(voicee);
});
