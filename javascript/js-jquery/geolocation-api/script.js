$(function () {
  var mapLink = $("#mapLink");
  var log = $("#log");

  $("#getLocationButton").click(function () {
    // Create geolocation options object
    var options = {
      enableHighAccuracy: true, //  boolean (default: false)
      timeout: 10000, //  in milliseconds (default: no limit)
      maximumAge: 1000, //  in milliseconds (default: 0)
    };

    //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
    navigator.geolocation.getCurrentPosition(
      showPosition,
      positionError,
      options
    );
  });

  function showPosition(position) {
    var coords = position.coords;

    $("#lat").val(coords.latitude);
    $("#long").val(coords.longitude);

    $("#acc").val(coords.accuracy);
    $("#alt").val(coords.altitude);
    $("#altAcc").val(coords.altitudeAccuracy);
    $("#heading").val(coords.heading);
    $("#speed").val(coords.speed);
    $("#timestamp").val(coords.timestamp);

    // Map your current position by latitude/longitude coordinates
    // mapLink.attr(
    //   "href",
    //   "http://maps.google.com/maps?q=" +
    //     $("#lat").val() +
    //     ",+" +
    //     $("#long").val() +
    //     "+(You+are+here!)&iwloc=A&hl=en"
    // );

    //newer api
    mapLink.attr(
      "href",
      "https://www.google.com/maps/@?api=1&map_action=map&center=" +
        $("#lat").val() +
        "," +
        $("#long").val() + "&zoom=17"
    );
    44.8695343,24.8445018

    mapLink.show();
  }

  function positionError(e) {
    switch (e.code) {
      case 0: // UNKNOWN_ERROR
        logMsg(
          "The application has encountered an unknown error while trying to determine your current location. Details: " +
            e.message
        );
        break;
      case 1: // PERMISSION_DENIED
        logMsg(
          "You chose not to allow this application access to your location."
        );
        break;
      case 2: // POSITION_UNAVAILABLE
        logMsg("The application was unable to determine your location.");
        break;
      case 3: // TIMEOUT
        logMsg("The request to determine your location has timed out.");
        break;
    }
  }

  function logMsg(msg) {
    log.append("<li>" + msg + "</li>");
  }

  mapLink.hide();
});
