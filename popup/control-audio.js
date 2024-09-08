const player_on = new Event("player-on"); // change later
const player_off = new Event("player-off");

document.getElementById("play-button").addEventListener("click", (e) => {
    var secret_text = document.getElementById('hidden-text');
    secret_text.style.visibility = 'visible';
    Element.dispatchEvent(player_on);
});
document.getElementById("pause-button").addEventListener("click", (e) => {
    var secret_text = document.getElementById('hidden-text');
    secret_text.style.visibility = 'hidden';
    Element.dispatchEvent(player_off);
});

