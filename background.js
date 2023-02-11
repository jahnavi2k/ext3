chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === "popup") {
    port.onMessage.addListener(function (request) {
      if (request.action === "playpause") {
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            chrome.scripting
              .executeScript({
                target: {
                  tabId: tabs[0].id,
                },
                func: () => {
                  const video = document.querySelector("video");
                  if (!video) {
                    return false;
                  }
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                  return video.paused;
                },
              })
              .then(() => console.log("Invoked the function"));
          }
        );
        port.postMessage({ result: "success" });
      }
    });
  }
});
