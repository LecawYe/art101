// In your js/script.js file

// This script is a placeholder and should be filled with actual debugging code as required.

console.log('Lab 14 script loaded.');

// Placeholder function to illustrate how you might structure your debugging code.
function debugExample() {
    console.log('Running debug example.');

    // Example debugging code
    try {
        // Simulate testing some functionality
        // Replace this with actual debugging code for each lab
        testFunctionality();
        console.log('No issues found during debug example.');
    } catch (error) {
        console.error('An issue was found:', error.message);
    }
}

// Example function to simulate functionality to be tested
function testFunctionality() {
    // Logic for testing goes here
    // Throw an error if something goes wrong
    if (Math.random() > 0.5) { // This is just a random condition for demonstration
        throw new Error('Random test error');
    }
}

// Run the debug example when the window loads
window.onload = debugExample;
