var result, log, worker;

function logMsg(msg) {
  log.append("<li>" + msg + "</li>");
}

$(function () {
  log = $("#log");
  result = $("#result");

  $("#postButton").click(function () {
    worker = new Worker("posting-messages-worker.js");
    worker.onmessage = messageHandler;
    worker.onerror = errorHandler;
    worker.postMessage("hello!");
    logMsg("Posting string message to worker thread.");
  });

  function messageHandler(e) {
    result.text(e.data);
  }

  function errorHandler(e) {
    logMsg(e.message);
  }
});
