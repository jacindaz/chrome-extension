// if (window.File && window.FileReader && window.FileList && window.Blob) {
//     //success! All the File APIs are supported.
// } else {
//     alert('File APIs are not supported in this browser.')
// }

// document.getElementById('weather').innerHTML += api_info;

$.ajax({
    dataType: "json",
    url: "http://api.wunderground.com/api/844ce94be6db44dd/conditions/q/MA/Boston.json",
    success: function(json) {
        wundergroundSuccess();
        console.log("JSON: " + json + "\n");
        console.log("Current Temperature: " + json["current_observation"]["temperature_string"]);
        document.getElementById('weather').innerHTML += (json["current_observation"]["temperature_string"])
    }
});

function wundergroundSuccess() {
    console.log("Weather ajax success");
    // alert("Weather ajax success");
}

function getWeatherdata(json)
{
    var returned_json = jQuery.parseJSON(json);
    console.log(returned_json);
}
