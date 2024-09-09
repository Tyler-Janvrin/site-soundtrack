console.log("Hello from control-audio!");

// code from https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage

function handleResponse(message) {
    console.log(`Message from the background script: ${message.response}`);
}
  
function handleError(error) {
    console.log(`Error: ${error}`);
}
  
function notifyBackgroundPage(e) {
    const sending = browser.runtime.sendMessage({
        greeting: "Greeting from the content script",
    });
    sending.then(handleResponse, handleError);
}
  
document.getElementById("notify-button").addEventListener("click", notifyBackgroundPage);

document.getElementById("play-button").addEventListener("click", (e) => {
    var secret_text = document.getElementById('hidden-text');
    secret_text.style.visibility = 'visible';
});
document.getElementById("pause-button").addEventListener("click", (e) => {
    var secret_text = document.getElementById('hidden-text');
    secret_text.style.visibility = 'hidden';
});