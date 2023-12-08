document.addEventListener('DOMContentLoaded', function () {
    const maintenanceTime = getMaintenanceTime();
    const errorMessage = document.getElementById('error-message');
    const maintenanceInfo = document.getElementById('maintenance-info');

    if (maintenanceTime) {
        errorMessage.innerText = `Scheduled maintenance. Please check back after ${maintenanceTime}.`;
        maintenanceInfo.innerText = `Maintenance scheduled at: ${maintenanceTime}`;
    } else {
        errorMessage.innerText = 'Error: Access Denied';
    }
});

function retry() {
    // You can implement logic to retry or redirect the user
    window.location.reload();
}
