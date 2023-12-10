document.addEventListener('DOMContentLoaded', function () {
    const errorMessage = document.getElementById('error-message');
    const maintenanceTime = getMaintenanceTime();

    // Check if maintenanceTime is defined
    if (maintenanceTime !== undefined && maintenanceTime !== null) {
        errorMessage.innerText = `Scheduled maintenance. Please check back after ${maintenanceTime}.`;
    } else {
        errorMessage.innerText = 'Error: Access Denied';
    }

    // You can add more JavaScript logic here if needed
});

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
