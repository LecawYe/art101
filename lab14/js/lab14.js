// Function to display a message indicating if a lab is functioning correctly or not
function checkLabStatus(labNumber, isWorking) {
    const statusMessage = isWorking
        ? `Lab ${labNumber} is functioning as expected.`
        : `Lab ${labNumber} requires debugging.`;
    
    console.log(statusMessage);
    // You could also append this status message to your HTML page if needed.
}

// You might want to call this function for each lab, possibly with a boolean indicating if it's working
checkLabStatus(1, true); // Example for Lab 1 which is working correctly
checkLabStatus(2, false); // Example for Lab 2 which is not working and needs debugging

// This function can be expanded or modified depending on how you're checking each lab
// For instance, you could have a series of tests for each lab's functionalities

// Add more specific debugging functions or tests for each lab as needed
function debugLab2() {
    // Specific code to test and debug Lab 2
}

// You could have a function that automatically runs all the tests for all labs
function runAllLabTests() {
    // Example structure, you would need to implement actual tests for each lab
    checkLabStatus(1, testLab1());
    checkLabStatus(2, testLab2());
    // ... and so on for each lab
}

// Function to run when the document is fully loaded to ensure all HTML elements are available
document.addEventListener('DOMContentLoaded', (event) => {
    runAllLabTests();
});

// Implement specific test functions for each lab
function testLab1() {
    // Perform tests specific to Lab 1
    // Return true if tests pass, false if any fail
}

function testLab2() {
    // Perform tests specific to Lab 2
    // Return true if tests pass, false if any fail
}

// ... and so on for each lab
