$.ajax({
    dataType: "json",
    url: "http://api.wunderground.com/api/844ce94be6db44dd/conditions/q/MA/Boston.json",
    success: function(json) {
        wundergroundSuccess();
        console.log("JSON: " + json + "\n");
        console.log("Current Temperature: " + json["current_observation"]["temperature_string"]);
        document.getElementById('weather').innerHTML += (json["current_observation"]["temperature_string"])
    },
    error: function(e) { wundergroundFailure() }
});

function wundergroundSuccess() {
    console.log("Weather ajax success");
    // alert("Weather ajax success");
}

function wundergroundFailure() {
    console.log("Unable to call Wunderground API.");
    alert("Unable to call Wunderground API.");
}
