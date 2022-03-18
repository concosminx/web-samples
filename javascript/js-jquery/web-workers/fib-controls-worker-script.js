var log = null;
var loadImg;
var _worker = null;
var seriesValues;

$(function () {
  log = $("#log");
  seriesValues = $("#series");
  loadImg = $("#loadImg");
  loadImg.hide();

  $("#generateButton").click(function () {
    var seriesLength = parseInt($("#seriesLength").val());

    log.html("");
    seriesValues.html("");
    loadImg.show();

    var args = createNewArgs("start", seriesLength);
    getWorker().postMessage(args);
  });

  $("#closeButton").click(function () {
    var args = createNewArgs("close");
    getWorker().postMessage(args);
  });

  $("#terminateButton").click(function () {
    getWorker().terminate();
    logMsg("Terminated worker thread from UI thread.");
    loadImg.hide();
  });

  $("#echoBox").change(function () {
    var args = createNewArgs("echo", null, this.value);
    getWorker().postMessage(args);
  });

  function getWorker() {
    if (_worker == null) {
      _worker = new Worker("fib-controls-worker.js");
      _worker.onmessage = messageHandler;
      _worker.onerror = errorHandler;
    }
    return _worker;
  }

  function createNewArgs(command, value, message) {
    return { Command: command, Value: value, Message: message };
  }

  function messageHandler(e) {
    var results = e.data;

    if (results.Result != null) {
      $.each(results.Result, function () {
        showValue(this);
      });
    }

    if (results.Message != "") {
      logMsg(results.Message);
    }

    loadImg.hide();
  }

  function errorHandler(e) {
    logMsg(e.message);
  }

  function logMsg(msg) {
    log.append("<li>" + msg + "</li>");
  }

  function showValue(val) {
    seriesValues.append("<li>" + val + "</li>");
  }
});
