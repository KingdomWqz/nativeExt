function appendMessage(text) {
    document.getElementById('response').innerHTML += "<p>" + text + "</p>";
}

function connect() {
    var hostName = "zrpa.chrome.bridge";
    port = chrome.runtime.connectNative(hostName);
    appendMessage("Connecting to native messaging host <b>" + hostName + "</b>")

    port.onMessage.addListener(onNativeMessage);
    // port.onDisconnect.addListener(onDisconnected);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('connect-button').addEventListener(
        'click', connect);
});

function onNativeMessage() {
    appendMessage("Received message: <b>" + JSON.stringify(message) + "</b>");
}