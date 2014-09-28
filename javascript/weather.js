// if (window.File && window.FileReader && window.FileList && window.Blob) {
//     //success! All the File APIs are supported.
// } else {
//     alert('File APIs are not supported in this browser.')
// }

// document.getElementById('weather').innerHTML += api_info;

$.ajax({
    dataType: "json",
    url: "http://api.wunderground.com/api/844ce94be6db44dd/conditions/q/CA/San_Francisco.json",
    success: wundergroundSuccess()
});

function wundergroundSuccess() {
    console.log("Weather ajax success");
    alert("Weather ajax success");
}
