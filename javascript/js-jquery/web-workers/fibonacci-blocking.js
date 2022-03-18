var results = [];
var log;

$(function () {
  log = $("#log");

  $("#generateButton").click(function () {
    log.html("");

    var seriesLength = parseInt($("#seriesLength").val());

    generateFibonacciSeries(seriesLength);

    $.each(results, function () {
      logMsg(this);
    });
  });
});

function calculateNextFibonacciValue(n) {
  var s = 0;
  var returnValue;

  if (n == 0) {
    return s;
  }
  if (n == 1) {
    s += 1;
    return s;
  } else {
    return (
      calculateNextFibonacciValue(n - 1) + calculateNextFibonacciValue(n - 2)
    );
  }
}

function generateFibonacciSeries(n) {
  results.length = 0;
  for (var i = 0; i <= n - 1; i++) {
    results.push(calculateNextFibonacciValue(i));
  }
}

function logMsg(msg) {
  log.append("<li>" + msg + "</li>");
}
