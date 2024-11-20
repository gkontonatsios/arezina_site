// Get the modal, button, and close element
const modal = document.getElementById("appointment-modal");
const btn = document.getElementById("book-appointment-btn");
const closeBtn = document.querySelector(".close");

// Show the modal when the button is clicked
btn.onclick = function () {
    modal.style.display = "block";
};

// Hide the modal when the close button is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Hide the modal when clicking outside of the modal content
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
