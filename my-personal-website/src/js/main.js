// Display a greeting based on the time of day
const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();
let greetingText = "Welcome to my website!";

if (hour < 12) {
    greetingText = "Good morning! Welcome to my website!";
} else if (hour < 18) {
    greetingText = "Good afternoon! Welcome to my website!";
} else {
    greetingText = "Good evening! Welcome to my website!";
}
greetingElement.textContent = greetingText;

// Add click event to the "Say Hello" button
const helloButton = document.getElementById('action-button');
if (helloButton) {
    helloButton.addEventListener('click', function() {
        alert("Hello! Thank you for visiting my website.");
    });
}