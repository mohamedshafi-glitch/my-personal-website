// This file contains the JavaScript code for the website. 
// It includes functions to handle events and add interactivity.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const buttonElement = document.getElementById('action-button');

    // Function to display a greeting message
    function displayGreeting() {
        greetingElement.textContent = "Welcome to My Personal Website!";
    }

    // Function to handle button click
    function handleButtonClick() {
        alert("Thank you for visiting my website!");
    }

    // Event listeners
    buttonElement.addEventListener('click', handleButtonClick);

    // Display greeting on page load
    displayGreeting();
});