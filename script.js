let voicee = new SpeechSynthesisUtterance(); // object to handle text-to-speech requests.

let voices = [];
let voiceSelect = document.querySelector("select");

// for diff voices options
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices(); // get voices will provide all the available voices in the device
  voicee.voice = voices[10]; // getVoices() retrieve or get all available voices and stores them in the voices array.
  // 11 pe girl voice h uske liye defalut voice 2 set ki h

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// change event on dropdown.. dropdown m kisi b voice option p click krne p voice change hoo
voiceSelect.addEventListener("change", () => {
  voicee.voice = voices[voiceSelect.value];
});

// selecting button
document.querySelector("button").addEventListener("click", () => {
  voicee.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(voicee);
});
