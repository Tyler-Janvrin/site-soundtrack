// this is wrong
// use this: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage

const player_on = new Event("player-on"); // change later
const player_off = new Event("player-off");

document.addEventListener(
    "player-on",
    (e) => {
        document.getElementById('audio-player').play();
    },
    false,
);

document.addEventListener(
    "player-off",
    (e) => {
        document.getElementById('audio-player').pause();
    },
    false,
);
