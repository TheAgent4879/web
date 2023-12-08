document.addEventListener('DOMContentLoaded', function () {
    const maintenanceTime = getMaintenanceTime();
    const errorMessage = document.getElementById('error-message');

    if (maintenanceTime) {
        errorMessage.innerText = 'Scheduled maintenance. Please try again later.';
    } else {
        errorMessage.innerText = 'Error: Access Denied';
    }
});

function retry() {
    // You can implement logic to retry or redirect the user
    window.location.reload();
}
