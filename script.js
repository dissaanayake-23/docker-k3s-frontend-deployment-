"use strict";

const launchButton = document.getElementById("launchButton");
const message = document.getElementById("message");

function runContainerDemo() {

    if (!launchButton || !message) {
        return;
    }

    launchButton.disabled = true;
    launchButton.textContent = "Starting Container...";

    message.textContent =
        "Building the Docker image and starting the container...";

    window.setTimeout(() => {

        launchButton.textContent = "Container Running";

        message.textContent =
            "✓ Deployment successful — application available on localhost:8080.";

        launchButton.disabled = false;

    }, 1200);
}

if (launchButton) {
    launchButton.addEventListener(
        "click",
        runContainerDemo
    );
}