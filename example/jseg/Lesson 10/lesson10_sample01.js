//window is the place that all the global vars are living
if (confirm("Do you want to go to Google?")) {
//location of the window is the url that the browser shows
    location = "http://www.google.com";
} else {
    location.reload(true);
}