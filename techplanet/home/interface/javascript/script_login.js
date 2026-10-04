document.addEventListener("DOMContentLoaded", function() {
    var loginPopup = document.getElementById("loginPopup");
    var overlay = document.getElementById("overlay");
    var closeButton = document.getElementById("closeButton");

    loginPopup.style.display = "none"; // Hide the login pop-up by default

    function toggleLogin() {
        // Toggle the display of the login pop-up
        loginPopup.style.display = (loginPopup.style.display === "none" || loginPopup.style.display === "") ? "block" : "none";

        // Toggle the visibility of the overlay
        overlay.style.display = (loginPopup.style.display === "block") ? "block" : "none";
    }

    // Attach the toggleLogin function to the login button
    var loginButton = document.getElementById("loginButton");
    if (loginButton) {
        loginButton.addEventListener("click", toggleLogin);
    }

    // Attach the toggleLogin function to the close button
    if (closeButton) {
        closeButton.addEventListener("click", toggleLogin);
    }
});
