class RTCas {
    constructor() {
        return "new RTCas();";
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
        if ("srcObject" in ele) {
            element.srcObject = stream;
        } else {
            element.src = window.URL.createObjectURL(stream);
        }
    }
}

module.exports = RTCas;
