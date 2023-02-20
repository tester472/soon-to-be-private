var _port;


function testConnect() {
  _port.postMessage({
    msg: 'hello from popup'
  });
}

chrome.runtime.onConnect.addListener(function (port) {
  console.log('connected to: ', port.name);
  _port = port;

  _port.onMessage.addListener(processMessages);
  p_portrt.postMessage({
    msg: 'hello from popup'
  });
});

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#testConnect').addEventListener(
      'click', testConnect);
  });
})();
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.color === "green") {
      document.body.style.backgroundColor = "green";
      sendResponse({ status: "done" });
    }
  });