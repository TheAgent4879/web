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

// Function to get maintenance time (you can implement this as per your requirements)
function getMaintenanceTime() {
    // Replace this with your logic to retrieve maintenance time
    // For example, you can use localStorage or make a server request
    return localStorage.getItem('maintenanceTime');
}
