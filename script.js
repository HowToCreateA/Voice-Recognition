const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = "pt-BR";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
const span = document.getElementById("span")

recognition.start();
/**
 * @param {Object} e O evento de resultado
 *
 */
recognition.onresult = (e) => {
  let voz = e.results[0][0];
  span.textContent = voz.transcript;
  console.log(voz.transcript + "\n" + voz.confidence);
};
recognition.onend = (e) => {
  recognition.start();
}
