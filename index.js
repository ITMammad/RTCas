class RTCasClass {
    constructor() {
        return "RTCas";
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

    assignTo(element , stream) {
        var ele = document.querySelector(element);
        if ("srcObject" in ele) {
            ele.srcObject = stream;
        } else {
            ele.src = window.URL.createObjectURL(stream);
        }
    }
}

module.exports = RTCasClass;