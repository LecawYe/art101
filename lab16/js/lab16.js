/**
 * Lab 16: Working with JSON and APIs
 * XKCD Comic Viewer
 * Author: Yihan Wang
 * Date: 12/7/2023
 */

$(document).ready(function() {
    var currentComicNum = null;

    function fetchComic(num) {
        var url = num ? `https://xkcd.com/${num}/info.0.json` : "https://xkcd.com/info.0.json";

        // Use a CORS proxy for development only; remove or replace before deploying to production
        var proxy = 'https://cors-anywhere.herokuapp.com/';
        var apiUrl = proxy + url;

        $.ajax({
            url: apiUrl,
            type: "GET",
            dataType: "json",
            success: function(comicObj) {
                currentComicNum = comicObj.num; // Store the current comic number
                $('#output').html(`
                    <h3>${comicObj.title}</h3>
                    <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.title}">
                `);
                // Update the Previous/Next buttons to reflect current state
                $('#prev').prop('disabled', currentComicNum <= 1);
                $('#next').prop('disabled', currentComicNum >= comicObj.num); // Assuming this is the latest comic
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#output').html(`<p>Error fetching comic: ${textStatus} (${errorThrown})</p>`);
                console.error("Error:", textStatus, errorThrown);
            }
        });
    }

    // Fetch the latest comic on load
    fetchComic();

    // Event handlers for the next and previous buttons
    $('#prev').click(function() {
        if (currentComicNum && currentComicNum > 1) { // Check for valid previous comic number
            fetchComic(currentComicNum - 1);
        }
    });

    $('#next').click(function() {
        if (currentComicNum) { // Check for valid next comic number
            fetchComic(currentComicNum + 1);
        }
    });
});
