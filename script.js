document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookieBanner');

    // Check if the user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (!cookiesAccepted) {
        // Show the cookie banner if not accepted
        cookieBanner.style.display = 'block';
    }
});

function acceptCookies() {
    // Set a flag in localStorage to indicate that cookies are accepted
    localStorage.setItem('cookiesAccepted', 'true');

    // Hide the cookie banner
    document.getElementById('cookieBanner').style.display = 'none';
}

function retry() {
    // You can implement logic to retry or redirect the user
    window.location.reload();
}
