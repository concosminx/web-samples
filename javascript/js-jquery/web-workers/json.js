var result, log, worker;
var args = { Command: "", Message: "", Value: 0 };

function logMsg(msg) {
  log.append("<li>" + msg + "</li>");
}

$(function () {
  log = $("#log");
  result = $("#result");

  $("#postButton").click(function () {
    worker = new Worker("json-worker.js");
    worker.onmessage = messageHandler;
    worker.onerror = errorHandler;
    args.Command = "start";
    args.Value = 100;
    worker.postMessage(args);
    logMsg("Posting JSON message to worker thread.");
  });

  function messageHandler(e) {
    result.text(e.data.Message);
  }

  function errorHandler(e) {
    logMsg(e.message);
  }
});
