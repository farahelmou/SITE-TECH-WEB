document.addEventListener("DOMContentLoaded", function() {
    var registerPopup = document.getElementById("customRegisterPopup");
    var overlay = document.getElementById("overlay"); // Assuming you have an overlay element
    var closeButton = document.getElementById("customCloseButton");

    registerPopup.style.display = "none"; // Hide the register pop-up by default

    function toggleRegister() {
        // Toggle the display of the register pop-up
        registerPopup.style.display = (registerPopup.style.display === "none" || registerPopup.style.display === "") ? "block" : "none";

        // Toggle the visibility of the overlay
        overlay.style.display = (registerPopup.style.display === "block") ? "block" : "none";
    }

    // Attach the toggleRegister function to the register button
    var registerButton = document.getElementById("registerButton"); // Replace with the actual ID of your register button
    if (registerButton) {
        registerButton.addEventListener("click", toggleRegister);
    }

    // Attach the toggleRegister function to the close button
    if (closeButton) {
        closeButton.addEventListener("click", toggleRegister);
    }
});
