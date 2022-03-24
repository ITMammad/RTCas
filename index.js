class RTCas {
    constructor() {
        if (window.location.protocol === "https:") {
            return "RTCas::Developed by ❤️ from AMYSoft Development Team...";
        } else {
            if (window.location.origin.indexOf("localhost") === -1) {
                throw new Error("WebRTC only works on localhost and domains secured with SSL...\nIf it's IP of localhost server, instend localhost at the domain origin...");
            }
        }
    }

    async getMedia(constraints) {
        if (typeof constraints !== "object") {
            throw new Error("RTCas parameters error!");
        } else {
            await navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                return stream;
            })
            .catch((err) => {
                throw err;
            });
        }
    }

    async getDisplay(constraints) {
        if (typeof constraints !== "object") {
            throw  new Error("RTCas parameters error!");
        } else {
            await navigator.mediaDevices.getDisplayMedia(constraints)
            .then((stream) => {
                return stream;
            })
            .catch((err) => {
                throw err;
            });
        }
    }

    assignTo(querySelector , stream) {
        var element = document.querySelector(querySelector);
        if ("srcObject" in element) {
            element.srcObject = stream;
        } else {
            element.src = window.URL.createObjectURL(stream);
        }
    }
}

module.exports = RTCas;
