var log = null;
var loadImg;
var worker;

$(function () {
  log = $("#log");
  loadImg = $("#loadImg");
  loadImg.hide();

  $("#generateButton").click(function () {
    var seriesLength = parseInt($("#seriesLength").val());

    log.html("");
    loadImg.show();

    worker = new Worker("fib-library-worker.js");
    worker.onmessage = messageHandler;
    worker.onerror = errorHandler;
    worker.postMessage(seriesLength);
  });

  function messageHandler(e) {
    var results = e.data;
    $.each(results, function () {
      logMsg(this);
    });
    loadImg.hide();
  }

  function errorHandler(e) {
    logMsg(e.message);
  }

  function logMsg(msg) {
    log.append("<li>" + msg + "</li>");
  }
});
