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
    console.log("title of active tab is " + window.top.location.href);
    sending.then(handleResponse, handleError);
}
  
document.getElementById("notify-button").addEventListener("click", notifyBackgroundPage);

document.getElementById("play-button").addEventListener("click", (e) => {
    var secret_text = document.getElementById('hidden-text');
    secret_text.style.visibility = 'visible';
    const sending = browser.runtime.sendMessage({
        greeting: "play",
    });
    sending.then(handleResponse, handleError);
});
document.getElementById("pause-button").addEventListener("click", (e) => {
    var secret_text = document.getElementById('hidden-text');
    secret_text.style.visibility = 'hidden';
    const sending = browser.runtime.sendMessage({
        greeting: "pause",
    });
    sending.then(handleResponse, handleError);
});

