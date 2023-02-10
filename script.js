document.getElementById("myButton1").addEventListener("click", fxn1);
var tabId;
chrome.tabs.query({
    active: true,
    currentWindow: true
}, function (tabs) {
    tabId = tabs[0].id;
    console.log(tabId);
});
// const playbackButton = this.querySelector("playback-button");
function fxn1() {
    // var video = document.getElementById("XEgP69J7L44");
    // var video = document.getElementsByClassName('XEgP69J7L44')[0];
    // video.pause();
    const video = document.querySelector("player");
    console.log(video);
    video.play();
    // if (!video) {
    //     return false;
    // }
    // if (video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }
    // toggleVideoPlayback(tabId);
}

// function togglePlayback() {
//     const video = document.querySelector("video");
//     if (!video) {
//         return false;
//     }
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
//     return video.paused;
// }
// function toggleVideoPlayback(tabId, callback) {

//     chrome.scripting.executeScript(
//         {
//             target: { tabId: tabId },
//             function: toggleVideoPlayback
//         },
//         (result) => {
//             if (callback && result && result.length > 0) {
//                 callback(result[0]);
//             }
//         }
//     );
// };