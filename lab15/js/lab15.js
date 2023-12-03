/*
    lab15.js - AJAX calls to different APIs.
    Author: Yihan Wang
    Date: 12/2/2023
*/

$(document).ready(function() {
    // Click event for the "Yes or No?" API
    $('#activateYesNo').click(function() {
        $.ajax({
            url: "https://yesno.wtf/api",
            dataType: "json",
            success: function(data) {
                var resultHtml = "<p>Answer: " + data.answer + "</p>";
                resultHtml += "<img src='" + data.image + "' alt='Answer Image'>";
                $("#output").html(resultHtml);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#output").html("Error: " + textStatus + ", " + errorThrown);
            }
        });
    });

    // Click event for NASA's Picture of the Day API
    $('#activateNasa').click(function() {
        $.ajax({
            url: "https://api.nasa.gov/planetary/apod",
            data: {
                api_key: "hOckEIBMR4laTxh1L77883D86yuW26tQtaopcF5e" // Your NASA API key
            },
            dataType: "json",
            success: function(data) {
                var resultHtml = "<p>Title: " + data.title + "</p>";
                if (data.media_type === "image") {
                    resultHtml += "<img src='" + data.url + "' alt='NASA Picture of the Day'>";
                } else if (data.media_type === "video") {
                    resultHtml += "<p>This is a video. Watch it <a href='" + data.url + "'>here</a>.</p>";
                }
                resultHtml += "<p>Description: " + data.explanation + "</p>";
                $("#output").html(resultHtml);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#output").html("Error: " + textStatus + ", " + errorThrown);
            }
        });
    });
});
