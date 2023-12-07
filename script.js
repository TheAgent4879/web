// You can add more JavaScript logic here if needed
// For now, let's just prevent any user interaction

document.addEventListener('click', function (event) {
    event.preventDefault();
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});
