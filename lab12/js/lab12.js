/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: YiHan Wang
   Date: 11/23/2023
*/
/*
    lab.js - Sorting Hat function to sort a name into a Hogwarts house.

    Author: [Your Name]
    Date: [Date]
*/


// Simple hash function to create a numeric value from a string
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

function sortingHat(str) {
    const hash = simpleHash(str);
    const houses = [
        { name: "Gryffindor", description: "Bravery and chivalry" },
        { name: "Ravenclaw", description: "Wisdom and wit" },
        { name: "Slytherin", description: "Cunning and ambition" },
        { name: "Hufflepuff", description: "Loyalty and patience" },
        // Add more houses here if needed
    ];
    const mod = hash % houses.length;
    return houses[mod];
}

$("#button").click(function() {
    const name = $("#input").val();
    const house = sortingHat(name);
    $("#output").html('<p>The Sorting Hat has sorted you into ' + house.name + ': ' + house.description + '</p>');
});
