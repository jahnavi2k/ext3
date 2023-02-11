window.onload = function () {
  var playPauseButton = document.getElementById("myButton1");

  playPauseButton.addEventListener("click", function () {
    var port = chrome.runtime.connect({ name: "popup" });
    port.postMessage({ action: "playpause" });
    port.onMessage.addListener(function (response) {
      console.log(response);
    });
    window.onunload = function () {
      port.disconnect();
    };
  });
};
