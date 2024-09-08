document.getElementById("play-button").addEventListener("click", (e) => {
    var secret_text = document.getElementById('hidden-text');
    secret_text.style.visibility = 'visible';
});
document.getElementById("pause-button").addEventListener("click", (e) => {
    var secret_text = document.getElementById('hidden-text');
    secret_text.style.visibility = 'hidden';
});